const {Client} = require('pg');

class DAODemande {
    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe0:groupe0@192.168.222.86:5432/M2L'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    ajouterDemandePrestation(nameLigue, dateDemande, nbCopie, typeCopie, nbAffr, pdsAffr) {
        const text='insert into prestation(idpresta,nomligue,date,nbcopie,typecopie,nbcourrier,poidscourrier, etat) values(24,$1,$2,$3,$4,$5,$6,null) returning *';

        const values =[nameLigue, dateDemande,nbCopie,typeCopie,nbAffr,pdsAffr];
        this._client.query(text,values, function(err,res){
            if(err){
                console.log(err.stack);
            }
            else{
                console.log(res.rows[0]);
            }
        })

            }
}
module.exports = DAODemande;