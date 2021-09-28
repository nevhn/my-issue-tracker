require('dotenv').config();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
  const { username, password } = req.body;
  const user = await User.findOne({ username }).lean();
  if (!user) {
    return res.send({ status: 'error', error: 'invalid username/password' });
  }
  if (await bcrypt.compare(password, user.password)) {
    // run if username and password matches
    console.log(user);
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET
    );

    return res.send({ status: 'ok', data: token });
  }

  console.log(req.body);
  res.send({ status: 'success' });
};
