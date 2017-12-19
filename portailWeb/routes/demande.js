var express = require('express');
var router = express.Router();

var demandeController = require('../controllers/demandeController');

router.get('/', demandeController.afficheDemande);
router.post('/',demandeController.faireDemande);

// router.post('/',demande_controller.demande);





module.exports = router;