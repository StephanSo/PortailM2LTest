
const DAOUser= require('../DAO/DAOpg/DAOUser');
const daoUser = new DAOUser();

// LOGIN
exports.login_form = function(req, res) { // attention à la route / depuis le /login
     res.render('login');
 };

exports.login_authentication = function(req, res) {
    res.redirect('/');
};

exports.indentification = function (req, res) {
    username = req.body.username;
    password = req.body.password;
    let valid =false;



    daoUser.loginUser(username, password, function (req) {
        console.log(req);
        if(req=="ok"){
            valid=true;
        }
        else{
            valid=false;
        }
        if(valid){
          res.redirect('/');
        }
        else{
            res.redirect('/users/login');
        }
    });


}

//LOGOUT
exports.logout = function(req, res){
     req.logout();
     
     res.redirect('/');
 };