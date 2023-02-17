const { Sequelize } = require("sequelize");
const db = require("../database");

const Sneaker = db.define("Sneaker", {
    Sneaker_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Sneaker_code: {
        type: Sequelize.STRING
    },
    Sneaker_titre: {
        type: Sequelize.STRING
    },
    Sneaker_description: {
        type: Sequelize.STRING
    },
    Sneaker_sexe: {
        type: Sequelize.INTEGER
    },
    Sneaker_marque: {
        type: Sequelize.STRING
    },
    Sneaker_taille: {
        type: Sequelize.FLOAT
    },
    Sneaker_etat: {
        type: Sequelize.INTEGER
    },
    Sneaker_prix: {
        type: Sequelize.FLOAT
    },
    Sneaker_img_link: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

Sneaker.sync();

module.exports = Sneaker;