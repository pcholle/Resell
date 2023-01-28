var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('accueil', { title: 'Accueil', session : req.session});
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Admin', session : req.session});
});

module.exports = router;