const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
      type: String,
      required: true,
      unique: true
      },
    email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      lastname: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['customer', 'artisan'],
        default: 'customer'
      },
      profilePhoto: {
        type: String
      },
      coverPhoto: {
        type: String
      },
      colorPalette: {
        type: String
      },
},{timestamps: true})

module.exports = mongoose.model('User', userSchema)