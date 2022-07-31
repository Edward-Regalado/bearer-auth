'use strict';

const sequelize = require("sequelize");

function user(db) {
    return db.define('User', {
        username: {
            type: sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
    });
}

module.exports = {
    user,
}


// const HASH_STRENGTH = 10;
// const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');


// const userModel = (sequelize, DataTypes) => {
//     const model = sequelize.define('User', {
//         username: { type: DataTypes.STRING, allowNull: false, unique: true },
//         password: { type: DataTypes.STRING, allowNull: false },
//     });

//     // alternatively, make hashing the responsibility of the model
//     model.beforeCreate(async (user) => {
//         let hashedPassword = await bcrypt.hash(user.password, HASH_STRENGTH);
//         user.password = hashedPassword;
//         //now , all the handler needs to do is call new User(username, password).create
//     });


//     return model;
// }
// module.exports = userModel;
