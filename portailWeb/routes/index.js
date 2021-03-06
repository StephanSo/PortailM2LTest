var express = require('express');
var router = express.Router();

var rss_controller = require('../controllers/rss_controller');
var indexController = require('../controllers/indexController');

/* GET home page. */

router.get('/', indexController.index);

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
);

router.get('/espacesPresse',
    rss_controller.rss,
    function (req, res) {
        console.log(req.session);
        res.render('espacesPresse', {title: 'Espaces des presses'});
    }
);




module.exports = router;