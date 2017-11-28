exports.index = function(req, res) { // attention à la route / depuis le /login
     console.log(req.session);
    res.render('index', { title: 'Portail de la M2L', user: req.user });

};
