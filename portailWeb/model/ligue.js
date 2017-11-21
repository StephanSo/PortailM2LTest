class Ligue{
    constructor(id, nom, adresse, tel){
        this._id = id ;
        this._nom = nom;
        this._adresse = adresse;
        this._tel = tel;
        this._lesPrestations = [];
        this._lesFactures = [];
    }


}

module.exports = Ligue;