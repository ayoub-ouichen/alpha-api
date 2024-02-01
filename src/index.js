const express = require('express');
var cors = require('cors');
const app = express();
const fetchDataRoute = require('./fechData');

app.use('/fetchData', fetchDataRoute);

module.exports = app;