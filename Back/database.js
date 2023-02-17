const Sequelize = require('sequelize');

const db = new Sequelize('Ressell', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
  });


db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log("Erreur in database connection : "+err));


module.exports = db;