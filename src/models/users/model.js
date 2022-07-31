const HASH_STRENGTH = 10;
const bcrypt = require('bcrypt');

// We can either make hashing the password the responsibility of handler or model
// handler hash example
// const signupHandler = async (req, res) => {
//     let { username, password } = req.body;
//     password = await bcrypt.hash(password);
//     // password has to be filled in hashed
//     const user = UserCollection.create({ username, password });
// }


const userModel = (sequelize, DataTypes) => {
    const model = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    // Using the model to hash the password
    model.beforeCreate(async (user) => {
        let hashedPassword = await bcrypt.hash(user.password, HASH_STRENGTH);
        user.password = hashedPassword;
    });

    return model;
};

module.exports = userModel;
