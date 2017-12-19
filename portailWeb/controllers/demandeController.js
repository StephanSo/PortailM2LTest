const DAODemande= require('../DAO/DAOpg/DAODemande');
const DAOLesLigues= require('../DAO/DAOpg/DAOLesLigues');

const daoDemande = new DAODemande();

exports.afficheDemande =  function (req, res) {
    res.render('demande');

};

exports.faireDemande = function (req,res) {
    nameLigue = req.body.txtLigue;
    dateDemande = req.body.txtDate;
    nbCopie = req.body.nbCopie;
    typeCopie = req.body.rad1;
    nbAffr = req.body.nbCourrier;
    pdsAffr = req.body.poidsCourrier;

    daoDemande.ajouterDemandePrestation(nameLigue,dateDemande,nbCopie,typeCopie,12,pdsAffr);

        res.redirect('/');

}


// exports.demande=function (req, res) {
//     nameLigue = req.body.txtLigue;
//     dateDemande = req.body.txtDate;
//     nbCopie = req.body.nbCopie;
//     typeCopie = req.body.rad1;
//     nbAffr = req.body.nbCourrier;
//
//     prestation_PgDAO.envoie_demande
//
//
//
//     res.render('demande' );
//
//
// }




