const selectAllAutores = () => db.query('SELECT * FROM autores');

const selectAutorById = (autorId) => db.query('SELECT * FROM autores WHERE id = ?', [autorId]);

module.exports = { selectAllAutores, selectAutorById};