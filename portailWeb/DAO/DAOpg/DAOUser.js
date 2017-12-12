const {Client} = require('pg');
const User = require('../../model/users');
const Role = require('../../model/role');
class DAOUser{

    constructor(){
        this._client = new Client({
            connectionString : 'postgres://groupe0:groupe0@192.168.222.86:5432/M2L'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err){
            if (err) return done(err);
        });
    }

    /***
     * recupere la liste de tout les Utilisateurs
     */
    getUser(cb){
        const query = {
            name:'fetch-all-user',
            text:'select * from groupe0."user"',
        };
        this._client.query(query, function(err,result){
            let lesUsers = [];
            if(err){
                console.log(err.stack);
            }else{
                let i=0;
                result.rows.forEach(function (row) {

                    let unUser = new User(result.rows[i]['id'], result.rows[i]['username'], result.rows[i]['password'], result.rows[i]['role']);
                    lesUsers.push(unUser);
                    i++;
                });

            }
            cb(lesUsers);
        })

    }

    getRoleByUser(cb){
        const query ={
            name:'fetch-role-by-user',
            text:'select groupe0."role".id, groupe0."role".libelle from groupe0."role" inner join groupe0."user" on groupe0."role".id = groupe0."user"."role"'
        }
        this._client.query(query, function (err, result) {
            let lesRoles = [];
            if(err){
                console.log(err.stack);
            }else{
                let i=0;
                result.rows.forEach(function (row) {
                    let unRole = new Role(result.rows[i]['id'], result.rows[i]['libelle']);
                    lesRoles.push(unRole);
                    i++

                })
            }
            cb(lesRoles);
        })
    }

    loginUser(usernameP, passwordP, cb) {
        let userC ="ko";
        this.getUser(function (listUsers) {
            let i =0;

            while(i<listUsers.length && userC !="ok")
            {
                if(usernameP == listUsers[i]._username){
                    if(passwordP ==listUsers[i]._password){
                        console.log('CONNEXION');
                        userC="ok";


                    }else{
                        console.log('nonOk');
                    }
                }
                else{
                    console.log('nonOk')

                }
                i++;
            }

                cb(userC)
            }
        );






    }

}
module.exports = DAOUser;