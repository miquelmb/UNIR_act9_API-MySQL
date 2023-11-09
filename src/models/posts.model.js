const selectAllPosts = () => {
    return db.query('SELECT * FROM posts');
};

const selectPostsByAutor = (autorId) => {
    // seleccion de columnas a mostrar para evitar mostrar autores_id
    return db.query('SELECT id, titulo, descripcion, fecha_creacion, categoría FROM posts WHERE autores_id = ?', [autorId]);
}

module.exports = { selectAllPosts, selectPostsByAutor }