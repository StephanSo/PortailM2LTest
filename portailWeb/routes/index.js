var express = require('express');
var router = express.Router();

var rss_controller = require('../controllers/rss_controller');


/* GET home page. */

router.get('/',
    function(req, res) {
        console.log(req.session);

        res.render('index', { title: 'Portail de la M2L', user: req.user });
    }
);
router.get('/annuaire',
    function (req, res) {
        console.log(req.session);
        res.render('annuaire', {title: 'Annuaire des ligues'});
    }
);

router.get('/infos',
    function (req, res) {
        console.log(req.session);
        res.render('infos', {title: 'Informations Utiles'});
    }
);

router.get('/participationsJOP',
    function (req, res) {
        console.log(req.session);
        res.render('participationsJOP', {title: 'Participation aux JO / JP'});
    }
);router.get('/espacesPresse',rss_controller.rss);
router.get('/espacesPresse',
    function (req, res) {
        console.log(req.session);
        res.render('espacesPresse', {title: 'Espaces des presses'});
    }
);


module.exports = router;