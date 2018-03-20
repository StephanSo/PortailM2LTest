var express = require('express');
var router = express.Router();

router.get('/desc',
    function(req, res) {
        console.log(req.session);

        res.render('infosM2L/description', { title: 'Descrition' });
    }
);

router.get('/services',
    function(req, res) {
        console.log(req.session);

        res.render('infosM2L/service', { title: 'Service' });
    }
);

router.get('/pers',
    function(req, res) {
        console.log(req.session);

        res.render('infosM2L/personnel', { title: 'Personnel' });
    }
);


module.exports = router;
