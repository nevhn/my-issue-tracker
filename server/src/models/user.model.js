const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },

  { collection: 'users' }
);

module.exports = mongoose.model('User', User);
