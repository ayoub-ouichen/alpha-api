const express = require('express');
var cors = require('cors');
const app = express();
const fetchDataRoute = require('./fechData');
const fetchGSR = require('./getGoogleSheets');

app.use('/fetchData', fetchDataRoute);
app.use('/fetchGoogleSheets', fetchGSR);

module.exports = app;