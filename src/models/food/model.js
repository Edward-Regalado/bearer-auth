'use strict';

const food = (sequelize, DataTypes) => sequelize.define('Food', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    calories: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = food;
