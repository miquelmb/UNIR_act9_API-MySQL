const selectAllPosts = () => db.query('SELECT * FROM posts');

const selectPostById = (postId) => db.query('SELECT * FROM posts WHERE id = ?', [postId]);

const selectPostsByAutor = (autorId) => db.query('SELECT * FROM posts WHERE autores_id = ?', [autorId]);

const insertPost = ({titulo, descripcion, fecha_creacion, categoria, autores_id}) => db.query('INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autores_id) values (?,?,?,?,?)', [titulo, descripcion, fecha_creacion, categoria, autores_id]);

module.exports = { selectAllPosts, selectPostById, selectPostsByAutor, insertPost };