const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

// get all
router.get('/', async (req, res) => {
    try{
        const posts = await Posts.find();
        res.json(posts); 
    }catch(err){
        res.json({message: err});
    }
});

// submit
router.post('/', async (req, res) => {
    const posts = new Posts({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savePosts = await posts.save()
        res.json(savePosts);
    }catch(err){
        res.json({message: err});
    }
});

// spesific
router.get('/:postId', async (req, res) => {
    try{
        const post = await Posts.findById(req.params.postId);
        res.json({post});
    }catch(err){
        res.json({message: err});
    }
});

// delete
router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Posts.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

// update
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Posts.updateOne(
            {_id: req.params.postId},
            {$set: {
                title: req.body.title
            }}
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;