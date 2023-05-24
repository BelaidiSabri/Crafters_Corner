const mongoose = require('mongoose')

const artisanProfileSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    artisanId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required :true,
        unique:true
    },
    profilePhoto: {
        type: String,
      },
    coverPhoto: {
        type: String,
      },
    colorPalette: {
        type: String,
      },
      specialities: {
        type: [String]
      },
      selfDescription: {
        type: String
      }  

})

const customerProfileSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    cart: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }],
    favoriteArtisans: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  });
  

const artisanProfile = new mongoose.model('artisanProfile',artisanProfileSchema)
const customerProfile =new mongoose.model('customerProdile',customerProfileSchema)


module.exports ={artisanProfile,customerProfile}