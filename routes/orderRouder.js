const express = require('express');
const OrdersController = require('../controllers/ordersController');
const router = express.Router();

router.get('/', OrdersController.getAllOrders)
router.get('/order/:id', OrdersController.getOrdersById)
router.post('/order', OrdersController.createOrder)
router.put('/order/:id', OrdersController.updateOrder)
router.delete('/order/:id', OrdersController.deleteOrder)

module.exports = router