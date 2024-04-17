const express = require('express');
const productControllers = require('../Controllers/productsController.js');

const productRouter = express.Router();

productRouter.route('/')
.get(productControllers.getAllproducts)
.post(productControllers.addNewData)

productRouter.route('/:id')
.put(productControllers.chngData)
.delete(productControllers.deleteItem)
.patch(productControllers.editItem)


module.exports = productRouter;