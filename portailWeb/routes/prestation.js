var express = require('express');
var router = express.Router();
const passport = require('passport');

var affra_controller = require('../controllers/presta_controller');

//get formulaire saisir nouvel affranchissement
router.get('/',affra_controller.affiche_prestation);

//post affiche prestation selectionnée
router.post('/',affra_controller.affiche_prestation_id);

//post valid prestation selectionnée (etat = true)
router.post('/:id/valider',affra_controller.valider_prestation);

module.exports = router;