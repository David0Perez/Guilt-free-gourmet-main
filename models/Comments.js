// Once database from an external API is created => User will be able to add comments
// on that recipe returned for a better user interactivity.
 const { Model, DataTypes } = require('sequelize');
 const sequelize = require('../config/connection');

 class Comments extends Model{}

Comments.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'recipe',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
    }
);

module.exports = Comments;