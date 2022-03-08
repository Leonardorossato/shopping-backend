const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId},
    name: {type: String, required: true},
    price: {type: Number, required: true}
})

const Product = mongoose.model('products', productSchema)

module.exports = Product