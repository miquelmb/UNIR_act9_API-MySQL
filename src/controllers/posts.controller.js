const PostsModel = require('../models/posts.model');

const getAllPosts = async (req, res) => {
    try {
        const [result] = await PostsModel.selectAllPosts()
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })
    }
};

const getPostsByAutor = async (req, res) => {
    const { autorId } = req.params;
    console.log(autorId);
    
    try {
        const [result] = await PostsModel.selectPostsByAutor(autorId)
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

module.exports = { getAllPosts, getPostsByAutor};