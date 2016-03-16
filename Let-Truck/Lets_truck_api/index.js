// Main App Entry point
// dependencies
require('dotenv').load();
var express = require('express'),
		app = express(),
		http = require('http'),
		bodyParser = require('body-parser'),
		routesApi = require('./server/api/routes/index.route');
		routesProvince = require('./server/api/routes/province.route');
		routesCanton = require('./server/api/routes/canton.route');
		routesDistrit = require('./server/api/routes/distrit.route');
		routesAuth = require('./server/api/routes/auth.route');
		routesTrip = require('./server/api/routes/trip.route');
		routesOfert = require('./server/api/routes/ofert.route');

		routesTruck = require('./server/api/routes/truck.route');
		//-------------------------------------------------
		var jwt    = require('jsonwebtoken');
		var User   = require('./server/api/models/user.model.js');
		var apiRoutes = express.Router();

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

//Routes
//app.use(function(req, res, next) {
	/*var token = req.body.token || req.query.token || req.headers['x-access-token'];
 	if (token) {
  	jwt.verify(token, 'ayuiter', function(err, decoded) {
    	if (err) {
      	return res.send({ success: false, message:'nooooo' });
      } else {sds
      	req.decoded = decoded;
      	next();
      }
   	});
 	} else {
  	return res.status(403).send({
       success: false,
       message: 'nooooooooooo otra vez'
		 });
	 }*/
//});
//
//app.use('/auth', apiRoutes);
//
app.use('/api', routesApi);
app.use('/api', routesAuth);
app.use('/api', routesProvince);
app.use('/api', routesCanton);
app.use('/api', routesDistrit);
app.use('/api', routesTrip);
app.use('/api', routesOfert);
app.use('/api', routesTruck);

//socket
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

//Server listen
server.listen(3000, function() {
	console.log('Listening on port 3000!!!');
});

//

io.sockets.on('connection', function(socket) {
 socket.on('new_offer', function (data) {
   socket.broadcast.emit('new_offer', {
     offer : data
   });
 });
});

io.sockets.on('connection', function(socket) {
 socket.on('new_trip', function (data) {
   socket.broadcast.emit('new_trip', {
     trip : data
   });
 });

});
