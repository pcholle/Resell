const { Sequelize } = require("sequelize");
const db = require("../database");

const Sneaker = db.define("Sneaker", {
    Sneaker_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Sneaker_titre: {
        type: Sequelize.STRING
    },
    Sneaker_description: {
        type: Sequelize.STRING
    },
    Sneaker_sexe: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})

module.exports = User;