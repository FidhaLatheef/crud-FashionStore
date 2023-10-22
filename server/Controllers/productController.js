var express = require('express');
// var router = express.Router();
var productModel = require('../models/productModel');


module.exports = {
  addProduct: async (req, res) => {
    const { name, description, price } = req.body;
    const imagePaths = req.files.map(file => file.path);
    try {
      const product = await productModel.create({
        name: name,
        description: description,
        price: price,
        images: imagePaths
      });
      console.log('Product created:', product);
      res.status(201).json({ message: 'Product created successfully.' });
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json({ message: 'Failed to create the product.' });
    }
  },
  getProductList: async (req, res) => {
    try {
      let products = await productModel.find();
      console.log(products);
      products = products.map((product) => {
        if (product.images) {
          return {
            ...product.toObject(),
            images: product.images.map((image) => `${image}`), // Update the image URL
          };
        }
        return product;
      });
      res.json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving products' });
    }
  },
  getProductById: async (req, res) => {
    const { id } = req.params
    try {
      let product = await productModel.findById(id)
      console.log(product)
      res.json(product)
    } catch (err) {
      console.log('errorr...', err)
    }
  },
  updateProductById: async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const newImages = req.files.map((file) => file.path);
  
    try {
      const product = await productModel.findById(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      // Update the product fields
      product.name = name;
      product.description = description;
      product.price = price;
  
      // Concatenate the new images with the existing ones
      product.images = product.images.concat(newImages);
  
      await product.save(); // Save the updated product
  
      return res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  
  deleteProductById: async (req, res) => {
    const { id } = req.params
    try {
      await productModel.findByIdAndDelete(id)
      console.log('product Deleted Succesfully')
      res.json({ message: 'product Deleted Succesfully' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Errorr Deleting Product' })
    }
  }



};