const studentsModel = require('../models/studentsModels');

const  getStudents = async(req,res)=>{
    const data = await studentsModel.find().populate({path:"depart",model:"Subjects"})
                                                                                        .then((result)=>{return result})
                                                                                        .catch((err)=>console.log(err));
    res.send(data);
}

const addStudents = async(req,res)=>{
    const {_id,...reqBody} = req.body
    const data = await studentsModel.create(reqBody)
    res.json(data);
}

module.exports = {
    getStudents,
    addStudents
}