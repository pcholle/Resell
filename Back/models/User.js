const { Sequelize } = require("sequelize");
const db = require("../database");

const User = db.define("User", {
    User_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    User_login: {
        type: Sequelize.STRING
    },
    User_password: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

module.exports = User;