// Routes entry point
var express = require('express'),
		router = express.Router(),
		offerController = require('../controllers/ofert.controller.js');
// Routes
router.param('id',function(req, res, next, id){
	req.body.id = id;
	next();
});
//router.get('/todos', ctrltodo.getAll),
	router.route('/offers')
 		.get(function(req, res){
   		 //tripController.getAll(req, res);
 		})
 		.post(function(req, res){
   		 offerController.create(req, res);
 		});
		/*.delete(function(req, res){
   		 //ctrltodo.deleteTodo(req, res);
 		});*/
		router.route('/ofertsTrip/:id')
			.get(function(req, res){
				offerController.getOfersByTrip(req, res);
		});
		/*router.route('/tripOne/:id')
			.get(function(req, res){
				tripController.getTrip(req, res);
		});*/
		//
	//cardRoute.rou/*te('/cards/:id')
 		//.delete(function(req, res){
   	//var cards = cardController.deleteDuty(req, res);
 	//});
	module.exports = router;
