var express = require('express');
var router = express.Router();

var demande_controller = require('../controllers/demande_controller');

router.get('/',
    function(req, res) {
        console.log(req.session);
        res.render('demande');
    }
);

module.exports = router;