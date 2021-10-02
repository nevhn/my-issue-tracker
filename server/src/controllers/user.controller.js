const User = require('../models/user.model');

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find({}).select('username -_id');
  res.send(users);
};

exports.getUser = async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  //   console.log(user);
  res.send(user);
};
