const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.register = async (req, res, next) => {
  //   console.log("request body: ", req.body);
  const { firstName, lastName, username, password: plainText } = req.body;

  //   TODO:
  // - check if username and password is valid
  //  -check if password is a certain length

  const password = await bcrypt.hash(plainText, 10);
  const newUser = await new User({
    firstName,
    lastName,
    username,
    password,
  });

  const response = await newUser.save();
  console.log('User created successfully', response);
  res.send({ status: 'success' });
};
exports.login = async (req, res, next) => {
  console.log(req.body);
  res.send({ status: 'success' });
};
