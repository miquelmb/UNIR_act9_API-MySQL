const AutoresModel = require('../models/autores.model');

const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutoresModel.selectAllAutores()
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })
    }
};


module.exports = { getAllAutores };