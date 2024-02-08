// Export all the models files from the application
const User = require('./User');
const Recipes = require('./Recipes');
const Category = require('./Category');
const Comments = require('./Comments');

User.hasMany(Recipes, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});
//Recipes belongs to User
Recipes.belongsTo(User, {
    foreignKey: 'recipe_id'
});

//Category hasMnay recipes
Category.hasMany(Recipes, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Recipes.belongsTo(Category, {
    foreignKey: 'category_id'
});

Recipes.hasMany(Comments, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Recipes, {
    foreignKey: 'recipe_id'
});

module.exports = { User, Recipes, Category, Comments };