const {Client} = require('pg');
const ligue = require('../../model/ligue');

class DAODLesLigues{
    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe0:groupe0@192.168.222.86:5432/M2L'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    voirToutesLesLigue (displaycb){
        const query = {
            name: 'toutesLesLigues',
            text: 'SELECT nom FROM ligue',
        };


        this._client.query(query, function(err, result){
            let lesLigues = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let uneLigue;

                    uneLigue = new ligue(lesLigues.length, row['libelle']);
                    lesLigues.push(uneLigue);
                });

                displaycb(lesLigues);

            }

        });


    };

}


}
