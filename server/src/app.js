console.clear();
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Issue = require('./models/Issues');
const app = express();

app.set('port', process.env.port || 8080);

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('database connected'))
  .catch((error) => console.log(error));

app.use(express.json());

// Add issue endpoint
app.post('/api/add', async (req, res) => {
  try {
    console.log('req.body: ', req.body);
    const newIssue = new Issue(req.body);
    const saveIssue = await newIssue.save();
    // console.log(newIssue);
    console.log(saveIssue);

    return res.send(saveIssue);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// fetch all issues
app.get('/api/issues', async (req, res) => {
  try {
    const issues = await Issue.find({});
    res.send(issues);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(app.get('port'), (server) => {
  console.info(`server listening on port ${app.get('port')}`);
});
