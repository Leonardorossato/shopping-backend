const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = process.env.mongoURI

mongoose.connect(mongoURI).then(()=>{
    console.log('Connection with mongoDB was successfully.')
}).catch((error)=>{
    console.log('Error connecting to mongoDB: ' + error)
})