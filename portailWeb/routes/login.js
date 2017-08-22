var express = require('express');
var router = express.Router();
const passport = require('passport')


router.get('/',function(req, res, next) { // attention à la route / depuis le /login
	res.render('login', { title: 'login' });
});

module.exports = router;
