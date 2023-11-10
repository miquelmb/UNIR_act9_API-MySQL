const PostsModel = require('../models/posts.model');

// Comprobar en la bbdd que exista un post con el id especificado
const checkIfPostIdExists = async (req, res, next) => {
    const { postId } = req.params;
    const [result] = await PostsModel.selectPostById(postId);
    if (result[0] === undefined) {
        return res.json({ fatal: `el post con id ${postId} no existe`})
    };
    next();
};

module.exports = { checkIfPostIdExists };