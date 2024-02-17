var express = require('express');
var router = express.Router();

const Sneaker = require("../models/Sneaker")

const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

/* GET home page. */
router.get('/create', checkUserSession, function(req, res, next) {
    if (req.query.sku){
        var codeSku = req.query.sku;
    }else{
        var codeSku = "";
    }
    sneaks.getProductPrices(codeSku, function(err, product){
        var sneakerDetail = {};
        if (product === null){
            sneakerDetail.code = "";
            sneakerDetail.name = "";
            sneakerDetail.description = "";
            sneakerDetail.image = "/images/sneakers/default/sneaker_default.png";
            sneakerDetail.prixAchat = "";
            sneakerDetail.prixVentes = "";
        }else{
            sneakerDetail.code = codeSku;
            sneakerDetail.name = product.shoeName;
            sneakerDetail.description = product.description;
            sneakerDetail.image = product.thumbnail;
            sneakerDetail.prixAchat = product.retailPrice;
            sneakerDetail.prixVentes = product.resellPrices.stockX;
        }
        res.render('sneaker/create', { title: 'Création', session : req.session, sneakerDetail: sneakerDetail});
    });
});

router.get('/list', function(req, res, next) {
    res.render('sneaker/list', { title: 'Sneakers', session : req.session});
});

router.get('/info', function(req, res, next) {
    res.render('sneaker/list', { title: 'Sneakers', session : req.session});
});

router.post('/', checkUserSession, async function(req, res, next){
    var sneakerCode = req.body.code;
    var sneakerTitre = req.body.titre;
    var sneakerDescription = req.body.description;
    var sneakerSexe = req.body.sexe;
    var sneakerMarque = req.body.marque;
    var sneakerTaille = req.body.taille;
    var sneakerEtat = req.body.etat;
    var sneakerPrix = req.body.prix;
    var sneakerImgLink = req.body.img_link;
    await Sneaker.create({
        Sneaker_code: sneakerCode,
        Sneaker_titre: sneakerTitre, 
        Sneaker_description: sneakerDescription,
        Sneaker_sexe: sneakerSexe,
        Sneaker_marque: sneakerMarque,
        Sneaker_taille: sneakerTaille,
        Sneaker_etat: sneakerEtat,
        Sneaker_prix: sneakerPrix,
        Sneaker_img_link: sneakerImgLink,
        Sneaker_Owner_id: req.session.user.User_id
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