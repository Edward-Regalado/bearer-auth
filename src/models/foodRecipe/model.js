'use strict';

const foodRecipe =  (sequelize, Datatypes) => sequelize.define('FoodRecipe', {
    FoodId: {
        type: Datatypes.INTEGER,
        references: {
            model: 'Food',
            key: 'id',
        }
    },
    RecipeId: {
        type: Datatypes.INTEGER,
        references: {
            model: 'Recipes',
            key: 'id',
        }
    }
});

module.exports = foodRecipe;
