const express = require('express');
const userControllers = require('../Controllers/userController.js');

const userRouter = express.Router()


userRouter.route('/')
.get(userControllers.getUser)
.post(userControllers.addUser)
.put(userControllers.chngUser)
.patch(userControllers.editUser)

module.exports = userRouter