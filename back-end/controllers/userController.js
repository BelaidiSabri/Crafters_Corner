const mongoose = require("mongoose");
const User = require("../models/userSchema");
const Product = require("../models/ProductSchema");
const {validateEmailAndPassword} = require('../middlewares/validators')
const {artisanProfile,customerProfile}= require('../models/ProfilesSchema')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const GenerateUniqueUserName = require("../helpers/GenerateUniqueUserName");
require("dotenv").config({ path: "./config/.env" });

// Register a user
const registerUser = async (req, res) => {
  try {
    await validateEmailAndPassword (req,res,async()=>{
      const { email, name,lastname, password, role } = req.body;
      const username= await GenerateUniqueUserName(name,lastname)
      const newUser = await User.findOne({ email });
      if (newUser) {
        return res.status(400).json({ msg: "User already exists" });
      } else {
        // Hash the user's password and create a new user in the database
        const hashedpw = await bcrypt.hash(password, 10);
        let user;
        if (role === "artisan") {
          // If the user is an artisan
          user = await User.create({
            email,
            name,
            lastname,
            password: hashedpw,
            role,
            username,
          });
          const newArtisanProfile = await artisanProfile.create({
            username:user.username,
            name: user.name,
            lastname:user.lastname,
            artisanId: user._id,
            profilePhoto: "",
            coverPhoto: "",
            colorPalette: "",
            selfDescription: "",
            specialities: [],
          }) 
        } else if (role==="customer") {
          // If the user is a customer
          user = await User.create({
            email,
            name,
            lastname,
            password: hashedpw,
            role,
            username,
          });
        }

        // Generate a JWT token for the new user
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET);
        res.json({ success: true, user: user, token: token });
        
      }
    })
    
    
  } catch (err) {
    console.log(err);
    if (err.response && err.response.data && err.response.data.errors) {
      const errorMessages = err.response.data.errors;
      res.status(400).json({ success: false, errors: errorMessages });
    } else {
      res.status(500).json({ success: false, msg: "Server problem" });
    }}
};

// Login user
const loginUser = async (req, res) => {
  try {
    // Validate email input format
    await body("email")
    .isEmail()
    .withMessage("please enter a valid email")
    .run(req);

    // Handle validation errors if any
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }
    
    // Check if user with the email exists in the database
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }
    
    // Compare the user's password with the hash stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }
    
    // If both email and password are valid, generate a JWT token for the user
    const token = jwt.sign(
      { id: user._id, role: user.role,username: user.username },
      process.env.JWT_SECRET
      );
      res.status(200).
      json({ success: true, token: token,username: user.username });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "server problem" });
    }
  };

  const getAllUsers = async (req,res)=>{
    try {
      const users = await User.find()
      if (users.length===0) return res.status(200).json({msg:'there is no user yet'})
      res.status(200).json({msg:'list of all users',users})
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "server problem" });
    }
  }
  
  module.exports = { registerUser, loginUser ,getAllUsers};
  
  
  
  /*  // Validate email and password input formats
   await body("email")
     .isEmail()
     .withMessage("Please enter a valid email")
     .run(req);
   await body("password")
     .isLength({ min: 8 })
     .withMessage("Password should be at least 8 characters")
     .run(req);
  
   // Handle validation errors if any
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     res.status(400).json({ errors: errors.array() });
   } else {
     // Check if the user already exists in the database */