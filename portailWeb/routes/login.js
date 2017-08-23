var express = require('express');
var router = express.Router();
const passport = require('passport');


router.get('/',function(req, res) { // attention à la route / depuis le /login
    res.render('login');
});

router.post('/',
    passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        }
);
module.exports = router;
