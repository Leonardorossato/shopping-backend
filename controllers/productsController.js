const Product = require("../models/Products")
const mongoose = require("mongoose")

class ProductsController{
    static getAllProducts = async(req, res) => {
        try {
            const products = await Product.find()
            return res.status(200).json(products)
        } catch (error) {
            return res.status(500).json({error : error.message})
        }
    }
    static getProductsById = async(req, res)=>{
        const {id} = req.params
        try {
            const product = await Product.findOne({where: {id: id}})
            return res.status(200).json(product)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static createProduct = async(req, res)=>{
        const newProduct = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })
        try {
            const savedProduct = await Product.create(newProduct)
            return res.status(201).json(savedProduct)
        } catch (error) {
            return res.status(404).json({error : error.message})
        }
    }
    static updateProduct = async(req, res)=>{
        const {id} = req.params
        try {
            await Product.findOneAndUpdate({where: {id: id}})
            return res.status(200).json({message: `Product with id ${id} was updated successfully.`})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static deleteProduct = async(req, res)=>{
        const {id} = req.params

        try {
            await Product.findOneAndDelete({where: {id: id}})
            return res.status(200).json({message : `The product with id ${id} was deleted.`})
        } catch (error) {
            return res.status(500).json({error : error.message})
        }
    }
}

module.exports = ProductsController