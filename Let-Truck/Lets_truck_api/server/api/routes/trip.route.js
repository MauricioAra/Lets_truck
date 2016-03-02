// Routes entry point
var express = require('express'),
		router = express.Router(),
		tripController = require('../controllers/trip.controller.js');
// Routes
router.param('id',function(req, res, next, id){
	req.body.id = id;
	next();
});
//router.get('/todos', ctrltodo.getAll),
	router.route('/trip')
 		.get(function(req, res){
   		 tripController.getAll(req, res);
 		})
 		.post(function(req, res){
   		 tripController.create(req, res);
 		});
		/*.delete(function(req, res){
   		 //ctrltodo.deleteTodo(req, res);
 		});*/
		router.route('/trip/:id')
			.get(function(req, res){
				tripController.getMyTrips(req, res);
		});
		router.route('/tripOne/:id')
			.get(function(req, res){
				tripController.getTrip(req, res);
		});
		//
	//cardRoute.route('/cards/:id')
 		//.delete(function(req, res){
   	//var cards = cardController.deleteDuty(req, res);
 	//});
	module.exports = router;
