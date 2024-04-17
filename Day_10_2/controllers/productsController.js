const getAllProducts = (req,res)=>{
    res.send({
        status:"success",
        results:0,
        data:{
            product:[]
        }
    })
}

module.exports = {
    getAllProducts
}