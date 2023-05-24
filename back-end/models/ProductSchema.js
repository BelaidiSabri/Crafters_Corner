const mongoose = require('mongoose')
const User = require('./userSchema')

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
      },
    artisan:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      discount: {
        type: Number,
        default: 0
      },
      custom: {
        type: Boolean,
        default: false
      }
})

module.exports =mongoose.model('Product',productSchema)