const express = require('express');
const app = express();
const OpenApiValidator = require('express-openapi-validator');
const apicache = require('apicache');
app.use(express.json());

//const cors = require('cors');
//const cache = require('cache-control');
//const auth = require('./middlewares/auth')
//app.use(cors());
/*
app.use(
    OpenApiValidator.middleware({
        apiSpec: './open-api.yaml'
    })
);

/*
const albumsRouter = require('./routers/albums');
app.use('/albums',auth, albumsRouter);

const tracksRouter = require('./routers/tracks');
app.use('/tracks',auth, tracksRouter);

const usersRouter = require('./routers/users');
app.use('/users',auth, usersRouter);

const reviewsRouter = require('./routers/reviews');
app.use('/reviews',auth, reviewsRouter);
*/
const albumsRouter = require('./routers/albums');
app.use('/albums', albumsRouter);

const tracksRouter = require('./routers/tracks');
app.use('/tracks',tracksRouter);

const usersRouter = require('./routers/users');
app.use('/users', usersRouter);

const reviewsRouter = require('./routers/reviews');
app.use('/reviews', reviewsRouter);

app.get('/cache/index', (req, res) => {
    res.json(apicache.getIndex())
  })

//const loginRouter = require('./controller/login');
//app.use('/login', loginRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status});
});

module.exports = app;