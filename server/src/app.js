console.clear();
// ====================================
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const issuesRoute = require('./routes/issues.routes');
const authRoute = require('./routes/auth.routes');
const userRoute = require('./routes/user.routes');

app.set('port', process.env.PORT || 8080);

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
app.use(cors());

// routes
app.use('/api/issues', issuesRoute);
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

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

app.listen(app.get('port'), (server) => {
  console.info(`server listening on port ${app.get('port')}`);
});
