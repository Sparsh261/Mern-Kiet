const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:String,
    price:Number
})

const productModel = mongoose.model('Products',productSchema);

const testProduct = new productModel({
    title:"Watch",
    price:1000
});

testProduct.save().then((res)=>{
    console.log(res)
})

