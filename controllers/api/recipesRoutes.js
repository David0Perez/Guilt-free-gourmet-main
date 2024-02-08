// Other than the external API request for recipes, the user is gonna be able to create new recipes
// and they'll be grabbed in their profile.
const router = require('express').Router();
const { Recipes } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res)=>{
    //create a new Recipe
    try{
        const newRecipe = await Recipes.create({
            ...req.body,
            user_id: req.session.user_id,
        });
    
        res.status(200).json(newRecipe);
    }catch(err){
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async(req, res)=>{
    //delete a recipe by its ID
    try{
        const recipeData = await Recipes.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });

        if(!recipeData){
            res.status(404).json({ message : `No Recipe found with this ID!`});
            return;
        };

        res.status(200).json(recipeData);
    }catch(err){
        res.status(500).json(err);
    }   
});

module.exports = router; 