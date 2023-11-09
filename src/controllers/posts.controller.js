const PostsModel = require('../models/posts.model');
const AutoresModel  = require('../models/autores.model');

const getAllPosts = async (req, res) => {
    try {
        const [result] = await PostsModel.selectAllPosts();
        for (let post of result) {
            const [autor] = await AutoresModel.selectAutorById(post.autores_id);
            delete post.autores_id;
            post.autor = autor[0];
        }
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const getPostById = async (req, res) => {
    try {
        const { postId } = req.params;
        const [result] = await PostsModel.selectPostById(postId);
        const [autor] = await AutoresModel.selectAutorById(result[0].autores_id);
        // Eliminar propiedad de autores_id y añadir propiedad de autor
        delete result[0].autores_id;
        result[0].autor = autor[0];

        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const getPostsByAutor = async (req, res) => {
    const { autorId } = req.params;
    try {
        const [result] = await PostsModel.selectPostsByAutor(autorId);
        // Eliminar el id del autor al recuperar los posts de un autor (sin modificar el select * del model por si hubiera futuros cambios en la tabla posts)
        for (let autor of result) {
            delete autor.autores_id;
        }
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const createPost = async (req, res) => {
    try {
        const [result] = await PostsModel.insertPost(req.body);
        const [post] = await PostsModel.selectPostById(result.insertId);
        res.json(post[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
};

module.exports = { getAllPosts, getPostById, getPostsByAutor, createPost };