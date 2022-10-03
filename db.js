const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://karan:Karananand%40123@cluster0.szsghni.mongodb.net/bookmyshow'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error' , () => {
    console.log('mongo db connection failed')
})

connection.on('connected' , () => {
    console.log('mongo db connection successfully')
})

module.exports = mongoose