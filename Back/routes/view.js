var express = require('express');
var router = express.Router();

//Base de données
const Sneaker = require("../models/Sneaker")

/* GET home page. */
router.get('/', async function(req, res, next) {
  var listSneakers = await Sneaker.findAll({ 
    limit: 10 ,
    order: [['Sneaker_id', 'DESC']]
  })
  res.render('site/accueil', { title: 'Accueil', session : req.session, listSneakers: listSneakers});
});

module.exports = router;