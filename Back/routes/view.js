var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('site/accueil', { title: 'Accueil', session : req.session});
});

module.exports = router;