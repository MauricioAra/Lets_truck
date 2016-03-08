// Routes entry point
var express = require('express'),
		router = express.Router(),
		truckController = require('../controllers/truck.controller.js');
// Routes
router.param('id',function(req, res, next, id){
	req.body.id = id;
	next();
});
//router.get('/todos', ctrltodo.getAll),
	router.route('/truck')
 		.post(function(req, res){
   		 truckController.create(req, res);
 		});
		/*.delete(function(req, res){
   		 //ctrltodo.deleteTodo(req, res);
 		});*/
		router.route('/myTruck/:id')
			.get(function(req, res){
				truckController.getMyTrucks(req, res);
		});
		//
	//cardRoute.route('/cards/:id')
 		//.delete(function(req, res){
   	//var cards = cardController.deleteDuty(req, res);
 	//});
	module.exports = router;
