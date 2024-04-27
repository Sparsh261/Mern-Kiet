const subModel = require('../models/subsModels');
const studentsModel = require('../models/studentsModels');
const mongoose = require('mongoose')

const  getSub = async(req,res)=>{
    const data = await subModel.find();
    res.send(data);
}

const addSub = async(req,res)=>{
    const {_id,...reqBody} = req.body
    const data = await subModel.create(reqBody)
    let objId = new mongoose.Types.ObjectId(data.id)
    await studentsModel.updateOne({sub:reqBody.name},{depart:objId})
    console.log(objId);
    res.json(data);
}

module.exports = {
    getSub,
    addSub
}