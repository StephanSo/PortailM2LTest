const DAODemande= require('../DAO/DAOpg/DAODemande');
const daoDemande = new DAODemande();

exports.afficheDemande =  function (req, res) {
    res.render('demande');
}

exports.faireDemande = function (req,res) {
    nameLigue = req.body.txtLigue;
    dateDemande = req.body.txtDate;
    nbCopie = req.body.nbCopie;
    typeCopie = req.body.rad1;
    nbAffr = req.body.nbCourrier;

    daoDemande.ajouterDemandePrestation(nameLigue,dateDemande,0,typeCopie,0);

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




