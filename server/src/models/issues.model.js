const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Issues', IssueSchema);
