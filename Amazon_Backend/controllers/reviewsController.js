
const productModel = require('../models/productsModel.js');
const reviewsModel = require('../models/reviewsModel');

const getReviews = async(req,res)=>{
    
    
    try{
        const data = await reviewsModel.find();
        res.send({
            status:"success1",
            reviews:data
        })
    }
    catch(err){
        res.send({
            status:"failed2",
            error: err
        })
    }
}

const addReviews = async(req,res)=>{
    
    try{
        const {_id,...reqBody} = req.body
        const data = await reviewsModel.create(reqBody);
        res.send({
            status:"success",
            reviews:data
        })
    }
    catch(err){
        res.send({
            status:"failed",
            error: err
        })
    }
}





module.exports = {
    getReviews,
    addReviews
}