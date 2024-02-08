// Post and delete comments added by the user
const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) =>{
    //create a new comment 
    try{
        const newComment = await Comments.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res)=>{
    try{
        const commentData = await Comments.destroy({
            where:{
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        //If there's no comment to delete, status not found will show up
        if(!commentData){
            res.status(404).json({ message : `No comment with this ID has been found`});
            return;
        };

        res.status(200).json(commentData);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;