const router = require('express').Router();

const PostsController = require('../../controllers/posts.controller');

// Peticiones GET
router.get('/', PostsController.getAllPosts);
router.get('/:postId', PostsController.getPostById);
router.get('/autor/:autorId', PostsController.getPostsByAutor);

// Peticiones POST
router.post('/', PostsController.createPost);

// router.put('/:postId', PostsController.updatePost);

// router.delete('/:postId', PostsController.deletePost);

module.exports = router;