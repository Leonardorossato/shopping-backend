const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId},
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'products'},
    quantity: {type: Number, default: 1}
})

const Order = mongoose.model('orders', ordersSchema)

module.exports = Order