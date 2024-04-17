// const productControllers = require('./Controllers/productsController.js');
// const userControllers = require('./Controllers/userController.js');
const productRouter = require('./Routes/productRoute.js')
const userRouter = require('./Routes/userRoute.js')

const express = require('express');

const fsPromises = require('fs/promises');

const app = express();

// const productRouter = express.Router()
// const userRouter = express.Router()

app.use('/api/products',productRouter);
app.use('/users',userRouter);

app.use(express.json())

app.use((req,res,next)=>{
    const time = new Date().toLocaleString();
    fsPromises.appendFile('./Log.txt',req.url+time+'\n');
    next();
})



// app.get('/api/products',(req,res)=>{
//     const data = fs.readFileSync('./data.json','utf-8')
//     const obj = JSON.parse(data);
//     res.send(obj);
// })

// app.put('/api/products/:id',productControllers.chngData)
// app.patch('/api/products/:id',productControllers.editItem)
// app.delete('/api/products/:id',productControllers.deleteItem)




// app.route('/api/products')
// .get(productControllers.getAllproducts)
// .post(productControllers.addNewData)

// app.route('/api/products/:id')
// .put(productControllers.chngData)
// .delete(productControllers.deleteItem)
// .patch(productControllers.editItem)




// productRouter.route('/')
// .get(productControllers.getAllproducts)
// .post(productControllers.addNewData)

// productRouter.route('/:id')
// .put(productControllers.chngData)
// .delete(productControllers.deleteItem)
// .patch(productControllers.editItem)




// app.route('/users')
// .get(userControllers.getUser)
// .post(userControllers.addUser)
// .put(userControllers.chngUser)
// .patch(userControllers.editUser)

// app.get('/users',userControllers.getUser)
// app.post('/users',userControllers.addUser)
// app.put('/users',userControllers.chngUser)
// app.patch('/users',userControllers.editUser)



// userRouter.route('/')
// .get(userControllers.getUser)
// .post(userControllers.addUser)
// .put(userControllers.chngUser)
// .patch(userControllers.editUser)







app.listen(5040,()=>console.log("Started"))