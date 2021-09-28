const Issues = require('../models/issues.model');

exports.getAllIssues = async (req, res, next) => {
  const issues = await Issues.find({});
  res.send(issues);
};
