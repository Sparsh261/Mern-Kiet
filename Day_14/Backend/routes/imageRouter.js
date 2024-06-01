
const express = require('express')


const imageRouter = express.Router();


imageRouter.route('/')
.get((req,res)=>{
    res.json({
        "status":"success"
    })
})


module.exports = imageRouter