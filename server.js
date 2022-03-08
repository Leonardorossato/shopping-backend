const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT
const productRouter = require('./routes/productRouter')
const orderRouder = require('./routes/orderRouder')
const mongoConnection = require('./connection/mongoConnection')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/products', productRouter)
app.use('/api/orders', orderRouder)

app.mongoConnection = mongoConnection

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})