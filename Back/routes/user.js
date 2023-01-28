var express = require('express');
var router = express.Router();

//Base de données
const database = require('../database')
const User = require("../models/User")

//Crypt password
const bcrypt = require("bcrypt")

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(
    User.findAll()
    .then(Users => {
      console.log(Users);
      res.status(200);
    })
    .catch(err => console.log("Err : "+err))
  );
});

router.post('/login', async function(req, res){
  let user_login = req.body.user_login;
  let user_password = req.body.user_password;
  if(user_login && user_password){
    let user = await User.findOne({
      where: {
        user_login: user_login
      }});
    if(user !== null){
      if (bcrypt.compareSync(user_password, user.dataValues.User_password)){
        req.session.user = user.dataValues;
        res.redirect("/");
      }else{
        res.send("Mot de passe incorrect");
      }
    }else{
        res.send("Utilisateur inconnu");
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

// function hashPassword(plaintextPassword) {
//   bcrypt.hash(plaintextPassword, 10)
//   .then(hash => {
//               // Store hash in the database
//           })
//           .catch(err => {
//               console.log(err)
//           })
//   }



module.exports = router;