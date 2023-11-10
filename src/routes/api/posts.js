const router = require('express').Router();
const PostsController = require('../../controllers/posts.controller');
const { checkIfAutorIdExists } = require('../../middlewares/autores.middleware');
const { checkIfPostIdExists } = require('../../middlewares/posts.middleware');

// Peticiones GET
router.get('/', PostsController.getAllPosts);
router.get('/:postId', checkIfPostIdExists, PostsController.getPostById);
router.get('/autor/:autorId', checkIfAutorIdExists, PostsController.getPostsByAutor);

// Peticiones POST
router.post('/', PostsController.createPost);

module.exports = router;