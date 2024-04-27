const mongoose = require('mongoose');

const subSchema = mongoose.Schema({
    name:String,
    depart:String,
})

const subModel = mongoose.model('Subjects',subSchema);

module.exports = subModel;
