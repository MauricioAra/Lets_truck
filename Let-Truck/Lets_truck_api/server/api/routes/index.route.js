// Routes entry point
var express = require('express'),
		router = express.Router(),
		userController = require('../controllers/user.controller.js');
// Routes
router.param('id',function(req, res, next, id){
	req.body.id = id;
	next();
});
//router.get('/todos', ctrltodo.getAll),
	router.route('/user')
 		.get(function(req, res){
   		 userController.getAll(req, res);
 		})
 		.post(function(req, res){
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
