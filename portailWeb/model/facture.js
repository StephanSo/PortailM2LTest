class Facture{
    constructor(id, dateEdition, numeroF, dateEcheance, dateReglement, uneLigue){
        this._id = id;
        this._dateEdition = dateEdition;
        this._numeroF = numeroF;
        this._dateEcheance = dateEcheance;
        this._dateReglement = dateReglement;
        this._lesPrestations = [];
        this._uneLigue = uneLigue;
    }



}
module.exports = Facture;