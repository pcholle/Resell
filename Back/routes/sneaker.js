var express = require('express');
var router = express.Router();

const Sneaker = require("../models/Sneaker")

/* GET home page. */
router.get('/create', checkUserSession, function(req, res, next) {
    res.render('sneaker/create', { title: 'Création', session : req.session});
});

router.get('/list', function(req, res, next) {
    res.render('sneaker/list', { title: 'Sneakers', session : req.session});
});

router.get('/info', function(req, res, next) {
    res.render('sneaker/list', { title: 'Sneakers', session : req.session});
});

router.post('/', checkUserSession, async function(req, res, next){
    var sneakerCode = req.body.code;
    var sneakerTaille = req.body.taille;
    var sneakerEtat = req.body.etat;
    var sneakerPrix = req.body.prix;

    await Sneaker.create({
        Sneaker_code: sneakerCode,
        Sneaker_taille: sneakerTaille,
        Sneaker_etat: sneakerEtat,
        Sneaker_prix: sneakerPrix
    });
    res.redirect("user/dashboard");
});



function checkUserSession( req, res, next ){
    if( req.session.user)
    {
        next();
    }
    else
    {
        res.redirect('/');
    }
}


module.exports = router;