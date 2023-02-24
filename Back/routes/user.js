var express = require('express');
var router = express.Router();

//Base de données
const User = require("../models/User")

//Crypt password
const bcrypt = require("bcrypt")

// Views
router.get('/login', function(req, res, next) {
  res.render('user/login', { title: 'Connexion', session : req.session});
});

router.get('/create', checkUserSession, function(req, res, next) {
  res.render('user/create', { title: 'Connexion', session : req.session});
});

router.get('/dashboard', checkUserSession, function(req, res, next) {
  res.render('user/dashboard', { title: 'Dashboard', session : req.session});
});

router.get('/listing', checkUserSession, function(req, res, next) {
  res.render('user/listing', { title: 'Mes paires', session : req.session});
});

// Back
router.post('/', async function(req, res){
  var user_login = req.body.login;
  var user_password = req.body.password;
  var user_password_confirm = req.body.password_confirm;
  if (req.body.admin == "on"){
    var user_admin = 1;
  }else{
    var user_admin = 0;
  }
  if(user_login && user_password && user_password_confirm){
    console.log(user_password);
    console.log(user_password_confirm);
    if (user_password == user_password_confirm){
      var user = await User.findOne({ 
        where: {
          user_login: user_login
        }});
      if(user === null){
        await User.create({
          User_login: user_login,
          User_password: bcrypt.hashSync(user_password, 10),
          User_admin: user_admin
        });
        res.redirect("/user/create");
      }else{
        res.send('Ce login existe déjà');
        res.end;
      }
    }else{
      res.send('Les mots de passe doivent être identique');
      res.end;
    }
  }else{
    res.send('Veuillez renseigner tous les champs');
    res.end;
  }


});

router.post('/login', async function(req, res){
  var user_login = req.body.user_login;
  var user_password = req.body.user_password;
  if(user_login && user_password){
    var user = await User.findOne({
      where: {
        user_login: user_login
      }});
    if(user !== null){
      if (bcrypt.compareSync(user_password, user.dataValues.User_password)){
        req.session.user = user.dataValues;
        res.redirect("/user/dashboard");
      }else{
        res.send("Mot de passe incorrect");
        res.end;
      }
    }else{
      res.send("Utilisateur inconnu");
      res.end;
    }
  }else{
    res.send('Veuillez saisir un login et un mot de passe valide');
    res.end;
  }
});

router.get('/logout', function(req, res, next){
  req.session.destroy();
  res.redirect("/");
});

// Functions
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