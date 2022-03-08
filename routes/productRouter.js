const express = require('express');
const ProductsController = require('../controllers/productsController');
const router = express.Router();

router.get('/', ProductsController.getAllProducts)
router.get('/product/:id', ProductsController.getProductsById)
router.post('/product', ProductsController.createProduct)
router.put('/product/:id', ProductsController.updateProduct)
router.delete('/product/:id', ProductsController.deleteProduct)

module.exports = router