const express = require('express')

const productsRouter = require('./routes/productsRoutes.js');
const usersRouter = require('./routes/usersRoutes.js');
const reviewsRouter = require('./routes/reviewsRoutes.js');

const app = express();

app.use(express.json());
app.use('/products',productsRouter);
app.use('/users',usersRouter);
app.use('/reviews',reviewsRouter);

module.exports = app;