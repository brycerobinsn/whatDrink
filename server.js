const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: '*'
}

require('dotenv').config();
// Connect to db after the dotenv above
require('./config/database');

const app = express();
// app.options('*', cors(corsOptions))

app.use(logger('dev'));
app.use(express.json());
// config serve-favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'))
// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'));
app.use('/api/drinks', cors(corsOptions), require('./routes/api/drinks'));


// "catch-all" route that will match all GET requests
// that don't match an API route defined above
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});