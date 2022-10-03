const mongoose = require("mongoose");

const movieschema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    maxcount : {
        type: String,
        required: true
    },
    likenumber : {
        type: String,
        required: true
    },
    costperticket: {
        type: Number , String,

    },
    imageurls: [],
    currentbookings: [],
    type : {
        type: String,
    },
    description:{
        type: String,
    },
    
} , {
    timestamps : true,
})

const movieModel = mongoose.model('movies' , movieschema)

module.exports = movieModel