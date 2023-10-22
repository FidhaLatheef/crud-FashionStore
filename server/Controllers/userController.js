var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel');


module.exports = {
  getUser: async (req, res) => {

    let user = await userModel.create({
      name: 'name',
      email: 'fidha@gmail.com',
      mobile: '1234567890',
      password: '1234'
    })
    console.log(user)
  },

  postUser: async (req, res) => {
    const { name, email, mobile, password } = req.body;

    try {
      const newUser = await userModel.create({
        name: name,
        email: email,
        mobile: mobile,
        password: password
      });
      console.log('data entered successfully');
      console.log(newUser);

      res.json({ message: 'User created successfully' });
    } catch (err) {
      console.log(err);
      console.log('something went wrong');

      res.status(500).json({ message: 'Error creating user' });
    }
  },

  getUserList: async (req, res) => {
    try {
      let users = await userModel.find();
      console.log(users);
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error fetching users', error: err });
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    try {
      let user = await userModel.findById(id);
      console.log(user);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error fetching user' });
    }
  },

  updateUserById: async (req, res) => {
    const { id } = req.params;
    const { name, email, mobile, password } = req.body;

    try {
      let updatedUser = await userModel.findByIdAndUpdate(
        id,
        {
          name: name,
          email: email,
          mobile: mobile,
          password: password,
        },
        { new: true }
      );

      console.log('User updated successfully');
      console.log(updatedUser);

      res.json({ message: 'User updated successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error updating user' });
    }
  },

  deleteUserById: async (req, res) => {
    const { id } = req.params;
    try {
      await userModel.findByIdAndDelete(id);
      res.json({ message: "User Deleted Sucessfully" })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Error deleting user' });
    }
  }



};