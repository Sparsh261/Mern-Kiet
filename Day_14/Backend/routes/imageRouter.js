
const express = require('express')
const ImagesControllers = require('../controllers/ImagesController.js')

const imageRouter = express.Router();


imageRouter.route('/')
.post(ImagesControllers.generateImageController)


module.exports = imageRouter