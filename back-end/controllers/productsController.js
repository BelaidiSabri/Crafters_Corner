const mongoose = require("mongoose");
const Product = require("../models/ProductSchema");
const { body, validationResult } = require("express-validator");
require("dotenv").config({ path: "./config/.env" });

//create a product
const addProduct = async (req, res) => {
  try {
    const { name, artisan, description, price, quantity, discount, custom } =
      req.body;
    const newProduct = await Product.create({
      name,
      artisan: new mongoose.Types.ObjectId(artisan),
      description,
      price,
      quantity,
      discount,
      custom,
    });
    res.status(200).json({ success: true, newProduct });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "server problem" });
  }
};
// GET PRODUCTS
    //get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ msg: "list of all products", products });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "server problem" });
  }
}; 
    // get all products of an artisan
const getProductsbyArtisan = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.find({ artisan: id });
    if (products.length === 0)
      return res
        .status(200)
        .json({ msg: "no product available for this artisan" });
    res.status(200).json({ products: products });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "server problem" });
  }
};
    //get product by id
const getProductsbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product)
      return res.status(200).json({ msg: "no product available by this id" });
    res.status(200).json({ msg: `product of id ${id}`, product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "server problem" });
  }
};
//update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "server problem" });
  }
};
//delete product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndRemove(id);
    res.status(200).json({ msg: "product removed", deletedProduct });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "server problem" });
  }
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsbyArtisan,
  getAllProducts,
  getProductsbyId,
};
