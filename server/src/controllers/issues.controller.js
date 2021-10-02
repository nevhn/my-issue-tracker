const Issues = require('../models/issues.model');
const User = require('../models/user.model');

exports.getAllIssues = async (req, res, next) => {
  const issues = await Issues.find({});
  res.send(issues);
};

exports.deleteIssue = async (req, res, next) => {
  const { id } = req.body;
  await Issues.deleteOne({ id });
  res.send({ status: 'ok' });
};

exports.addIssue = async (req, res, next) => {
  console.log('req.body: ', req.body);
  const newIssue = new Issues(req.body);
  const saveIssue = await newIssue.save();
  // console.log(newIssue);
  // console.log(saveIssue);

  res.send(saveIssue);
};

exports.getIssue = async (req, res, next) => {
  const username = req.params.username;
  console.log('req.params', username);
  const issues = await Issues.find({ assignedTo: username });
  // console.log(issues);
  res.send(issues);
};
