const selectAllAutores = () => {
    return db.query('SELECT * FROM autores');
};

module.exports = { selectAllAutores}