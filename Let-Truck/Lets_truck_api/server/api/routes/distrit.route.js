// Routes entry point
var express = require('express'),
		router = express.Router(),
		distritController = require('../controllers/distrit.controller.js');
// Routes
router.param('id',function(req, res, next, id){
	req.body.id = id;
	next();
});
//router.get('/todos', ctrltodo.getAll),
	router.route('/distrit')
 		.get(function(req, res){
   		 distritController.getAll(req, res);
 		});
 		/*.post(function(req, res){
   		 userController.create(req, res);
 		});
		/*.delete(function(req, res){
   		 //ctrltodo.deleteTodo(req, res);
 		});
		/*router.route('/todos/:id')
			.delete(function(req, res){
				ctrltodo.deleteTodo(req, res);
		});*/
		//
	//cardRoute.route('/cards/:id')
 		//.delete(function(req, res){
   	//var cards = cardController.deleteDuty(req, res);
 	//});
	module.exports = router;
