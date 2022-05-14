const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
})

//export
//var mongoose, methode 'model', model 'Category'
module.exports = mongoose.model('Member', memberSchema)