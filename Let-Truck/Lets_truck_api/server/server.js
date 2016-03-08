var express = require('express');
var app = express();
var api = require('./api/api');
var mongoose = require('mongoose');
var database = require('config/database');
// setup the app middlware
require('./middleware/appMiddlware')(app);
//database
//mongoose.connect(database.go);
// setup the api
app.use('/api/', api);
// set up global error handling

// export the app for testing
module.exports = app;
