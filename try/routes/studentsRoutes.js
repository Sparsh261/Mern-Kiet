
const express = require('express')
const studentsController = require('../controllers/studentsControllers');

const studentsRouter = express.Router();


studentsRouter.route('/')
.get(studentsController.getStudents)
.post(studentsController.addStudents)

module.exports = studentsRouter