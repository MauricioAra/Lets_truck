// Main App Entry point
// dependencies
var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		routesApi = require('./server/api/routes/index.route');
		routesProvince = require('./server/api/routes/province.route');
		routesCanton = require('./server/api/routes/canton.route');
		routesDistrit = require('./server/api/routes/distrit.route');
		routesAuth = require('./server/api/routes/auth.route');
		routesTrip = require('./server/api/routes/trip.route');
		routesOfert = require('./server/api/routes/ofert.route');
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
//
app.use('/api', routesApi);
app.use('/api', routesProvince);
app.use('/api', routesCanton);
app.use('/api', routesDistrit);
app.use('/api', routesAuth);
app.use('/api', routesTrip);
app.use('/api', routesOfert);
app.listen(3000, function() {
	console.log('Listening on port 3000!!!');
});
