// Once the user save the Recipe he wants from an external API request => The database will
// be stored locally. => Able to comment it and modify it.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Recipes.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        recipe_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        nutrients:{
            //since ingrediens section is going to be a list of options => Stored in an array
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    },
);

module.exports = Recipes;