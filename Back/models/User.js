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
    },
    User_admin: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})

User.sync();

User.findOrCreate({
    where: {
        User_login: "Pierre",
        User_password: "$2b$10$pAgL4zkUrv3BMkV2hIR6F.zzkQRlM8wIM64OijHkXUs6yEQDC8MaG",
        User_admin: 1
    }
});

module.exports = User;