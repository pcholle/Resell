var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/create', checkUserSession, function(req, res, next) {
  res.render('sneaker/create', { title: 'Création', session : req.session});
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