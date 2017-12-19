const DAOPrestation = require('../DAO/DAOpg/DAOPrestation');
const daoPrestation = new DAOPrestation();

exports.affiche_prestation = function(req, res) {
    daoPrestation.getAllPrestation(
        function (lesPrestations) {
            res.render('choisirPrestation',{liste:lesPrestations});
    })

};
exports.affiche_prestation_id = function(req,res){
    id = req.body.choix;
    daoPrestation.getPrestationById(id, function(unePrestation){
        res.render('prestationID', {prestation:unePrestation});
    })
};
exports.valider_prestation = function(req, res) {
    verif = req.body.valider;
    if(verif === 'on') {
        daoPrestation.UpdateTruePrestationById(id);
        res.render('prestationIdValid', {numero: id});
    }
    else{
        daoPrestation.UpdateFalsePrestationById(id);
        res.render('prestationIdRefus', {numero:id});
    }
};