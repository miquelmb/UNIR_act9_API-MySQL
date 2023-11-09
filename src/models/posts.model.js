const selectAllPosts = () => db.query('SELECT * FROM posts');

const selectPostById = (postId) => db.query('SELECT * FROM posts WHERE id = ?', [postId]);

const selectPostsByAutor = (autorId) => db.query('SELECT * FROM posts WHERE autores_id = ?', [autorId]);

module.exports = { selectAllPosts, selectPostById, selectPostsByAutor };