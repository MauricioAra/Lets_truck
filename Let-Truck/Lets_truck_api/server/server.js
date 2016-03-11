var express = require('express');
var app = express();
var api = require('./api/api');s
//var port = process.env.PORT || 3000; // used to create, sign, and verify tokens

// setup the app middlware
require('./middleware/appMiddlware')(app);
//database
//mongoose.connect(database.go);
// setup the api
app.use('/api/', api);
// set up global error handling

// export the app for testing
module.exports = app;
