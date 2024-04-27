
const express = require('express')
const subsController = require('../controllers/subsControllers');

const subsRouter = express.Router();


subsRouter.route('/')
.get(subsController.getSub)
.post(subsController.addSub)

module.exports = subsRouter