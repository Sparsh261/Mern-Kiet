const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:String,
    roll:Number,
    marks:Number,
    sub:String,
    depart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subjects'
    }
})

const studentModel = mongoose.model('Students',studentSchema)

module.exports = studentModel;