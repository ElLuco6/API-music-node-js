const jwt = require('jsonwebtoken');
const db = require('../models/index');
const bcrypt = require('bcrypt');
require('dotenv').config();
//const cookieParser = require('cookie-parser')

exports.authMiddlewareAdmin = async (req, res, next) => {
    console.log(req.headers.cookie)
    let authorization =(req.headers.cookie)
    if (req.headers && !req.headers.cookie) {
        res.status(401).json({success: false, message: 'You need to be authenticated'});
    } else {
        const token = (authorization.split(' ')[1]).split('=')[1];
        const isAdmin =(authorization.split(' ')[0]).split('=')[1];
        console.log(isAdmin)
        try {
            const decodedToken = await jwt.verify(token, process.env.SECRET);
            if (decodedToken) {
                if(isAdmin=='true;'){
                    next();}
                else{res.status(401).json({success: false, message: "You don't have the rights "});}
            } else {
                res.status(401).json({success: false, message: 'This authentication is no more valid'});
            }
        } catch(e) {
            next(e);
        }
    }
}
exports.authMiddleware = async (req, res, next) => {
    console.log(req.headers.cookie)
    let authorization =(req.headers.cookie)
    if (req.headers && !req.headers.cookie) {
        res.status(401).json({success: false, message: 'You need to be authenticated'});
    } else {
        const token = (authorization.split(' ')[1]).split('=')[1];
        const isAdmin =(authorization.split(' ')[0]).split('=')[1];
        console.log(isAdmin)
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
                res.cookie('tokenCookie',token,{maxAge: 1200000, ovrerwrite : true});
                res.cookie('authCookie',user.isAdmin, {maxAge: 1200000,ovrerwrite : true});
                res.status(200).json({success: true,token });
            } else {
                res.status(401).json({success: false, message: 'Password is incorrect'});
            }
        } else {
            res.status(404).json({success: false, message: 'This user doesn\'t exists, be cautious about blanks'});
        }
    } else {
        res.status(400).json({success: false, message: 'username and password are required'});
    }
}