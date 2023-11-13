const AutoresModel = require('../models/autores.model');

// Comprobar en la bbdd que exista un autor con el id especificado
const checkIfAutorIdExists = async (req, res, next) => {
    const { autorId } = req.params;
    const [result] = await AutoresModel.selectAutorById(autorId);
    if (result[0] === undefined) {
        return res.json({ fatal: `el autor con id ${autorId} no existe`});
    };
    next();
};

module.exports = { checkIfAutorIdExists };