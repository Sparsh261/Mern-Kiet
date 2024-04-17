const productsRouter = require('./routes/productsRoutes.js');
const test = require('./models/productsModel.js')

const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.use('/api/products',productsRouter);

const url = 'mongodb+srv://_USERNAME_:_PASSWORD_@cluster0.3pqyhsm.mongodb.net/_DATABASENAME_?retryWrites=true&w=majority&appName=Cluster0'
const dataBaseUser = 'SparshChauhan'
const dataBasePassword = 'chauhansparsh112'
const dataBaseName = 'Amazon-Backend'

let dbLink = url.replace("_USERNAME_",dataBaseUser)
dbLink =  dbLink.replace("_PASSWORD_",dataBasePassword)
dbLink =  dbLink.replace("_DATABASENAME_",dataBaseName)

mongoose.connect(dbLink)
.then(()=>{
    console.log("DataBase COnnected")
})



app.listen(1400);