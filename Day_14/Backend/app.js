const express = require('express')
const cors = require("cors");
const imageRouter = require('./routes/imageRouter')

const app = express();
app.use(cors({origin:true}));

app.use(express.json());

app.use('/api/images',imageRouter)

module.exports = app;