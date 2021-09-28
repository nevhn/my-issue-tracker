console.clear();
// ====================================
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const issuesRoute = require('./routes/issues.routes');
const authRoute = require('./routes/auth.routes');
// const Issue = require('./models/issues.model');

app.set('port', process.env.port || 8080);

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('database connected'))
  .catch((error) => {
    console.error('connection error', error);
    process.exit();
  });

// config express
app.use(express.json()); // parses json
app.use(express.urlencoded({ extended: true })); // parses payload

// routes
app.use('/api/issues', issuesRoute);
app.use('/api/auth', authRoute);

// error handling
app.use((err, req, res, next) => {
  if (err.code === 11000) {
    // duplicate key
    return res
      .status(500)
      .send({ status: 'error', error: 'username already in use' });
  }
  res.status(500).send(err.message);
  throw err;
});

// fetch all issues
// app.get('/api/issues', async (req, res) => {
//   try {
//     const issues = await Issue.find({});
//     res.send(issues);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error);
//   }
// });

// // fetch devs
// app.get('/api/devs', async (req, res) => {
//   try {
//     const people = await Issue.find({}).select('assignedTo -_id');
//     console.log('people: ', people);
//     res.send(people);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error);
//   }
// });
// // add issue
// app.post('/api/add', async (req, res) => {
//   try {
//     console.log('req.body: ', req.body);
//     const newIssue = new Issue(req.body);
//     const saveIssue = await newIssue.save();
//     // console.log(newIssue);
//     // console.log(saveIssue);

//     return res.send(saveIssue);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error);
//   }
// });

// // delete issue

// app.delete('/api/delete', async (req, res) => {
//   try {
//     Issue.deleteOne;
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.listen(app.get('port'), (server) => {
  console.info(`server listening on port ${app.get('port')}`);
});
