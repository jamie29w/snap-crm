const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const clientRouter = require('./routes/clients');
const authRouter = require('./routes/auth');
const cors = require('cors');
const path = require('path');
const config = require('./config.js');
const expressJwt = require('express-jwt');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));
app.use('/api', expressJwt({ secret: config.secret }));
app.use('/auth/verify', expressJwt({ secret: config.secret }));
app.use('/api/clients', clientRouter);
app.use('/auth', authRouter);

// clients = [];

mongoose.Promise = global.Promise;
mongoose.connect(
  config.db,
  { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true },
  err => {
    if (err) {
      throw err;
    } else {
      console.log("Don't droppa da base");
    }
  }
);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(config.port, () => {
  console.log(`Kreacher has been watching port ${config.port}`);
});
