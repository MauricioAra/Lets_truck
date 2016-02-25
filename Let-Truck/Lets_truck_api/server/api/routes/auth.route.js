// Routes entry point
var express = require('express'),
		router = express.Router(),
		authController = require('../controllers/auth.controller.js');
// Routes
router.param('id',function(req, res, next, id){
	req.body.id = id;
	next();
});
//router.get('/todos', ctrltodo.getAll),
	router.route('/authenticate')
 		.post(function(req, res){
   		 authController.authenticate(req, res);
 		});
	module.exports = router;
