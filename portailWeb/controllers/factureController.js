const DAOLesLigues= require('../DAO/DAOpg/DAOLesLigues');
const daoLesligues = new DAOLesLigues();
const DAOFacture= require('../DAO/DAOpg/DAOFacture');
const daoFacture = new DAOFacture();


exports.demandeAffFacture = function (req, res, next) {
    daoLesligues.voirToutesLesLigue(function (lesLigues) {
        res.render('demandeAffFacture',{listLigues :lesLigues});
    });

};
exports.afficheFactureDemander = function (req, res, next){
    mois = req.body.test;
    ligue = req.body.ligue;
    annee = req.body.annee;
    daoFacture.afficherFacture(ligue,annee,mois, function (laFacture) {
        res.render('affFactureDetail',{facture :laFacture});


    })
};