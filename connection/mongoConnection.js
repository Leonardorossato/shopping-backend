const mongoose = require('mongoose')

mongoose.connect(mongoURI).then(()=>{
    console.log('Connection with mongoDB was successfully.')
}).catch((error)=>{
    console.log('Error connecting to mongoDB: ' + error)
})