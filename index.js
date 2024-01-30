
const express = require('express');
var cors = require('cors');
const app = express();
const fetchDataRoute = require('./fetchData');

app.use('/fetchData', fetchDataRoute);

module.exports = app;