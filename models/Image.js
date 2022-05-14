const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    }
})

//export
//var mongoose, methode 'model', model 'Category'
module.exports = mongoose.model('Image', imageSchema)