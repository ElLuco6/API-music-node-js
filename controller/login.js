const jwt = require('jsonwebtoken');
const db = require('../models/index');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.authMiddleware = async (req, res, next) => {
    console.log(req.headers.authorization)
    console.log(req.headers)

    if (req.headers && !req.headers.authorization) {
        res.status(401).json({success: false, message: 'You need to be authenticated'});
    } else {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = await jwt.verify(token, process.env.SECRET);
            if (decodedToken) {
                next();
            } else {
                res.status(401).json({success: false, message: 'This authentication is no more valid'});
            }
        } catch(e) {
            next(e);
        }
    }
}

exports.login = async (req, res) => {
    if (req.body.userName && req.body.password) {
        const user = await db.users.findOne({
            where: {userName: req.body.userName}
        });
        if (user) {
            const verifiedUser = await bcrypt.compare(req.body.password, user.password);
            if (verifiedUser) {
                const token = jwt.sign({
                    data: {id: user.id, userName: user.userName}
                }, process.env.SECRET, {
                    expiresIn: '30m'
                });
                res.status(200).json({success: true, token});
            } else {
                res.status(401).json({success: false, message: 'Password is incorrect'});
            }
        } else {
            res.status(404).json({success: false, message: 'This user doesn\'t exists'});
        }
    } else {
        res.status(400).json({success: false, message: 'username and password are required'});
    }
}