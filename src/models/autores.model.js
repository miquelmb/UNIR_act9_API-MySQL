const selectAllAutores = () => db.query('SELECT * FROM autores');

const selectAutorById = (autorId) => db.query('SELECT * FROM autores WHERE id = ?', [autorId]);

const insertAutor = ({nombre, email, imagen}) => db.query('INSERT INTO autores (nombre, email, imagen) values (?,?,?)', [nombre, email, imagen]);

module.exports = { selectAllAutores, selectAutorById, insertAutor };