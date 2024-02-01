const express = require('express');
var cors = require('cors');
const app = express();
const fetchDataRoute = require('./src/fechData');

app.use('/fetchData', fetchDataRoute);

module.exports = app;