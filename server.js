const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT
const productRouter = require('./routes/productRouter')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/products', productRouter)

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})