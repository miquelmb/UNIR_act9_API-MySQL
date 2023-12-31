const AutoresModel = require('../models/autores.model');

const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutoresModel.selectAllAutores();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })
    };
};

const getAutorById = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await AutoresModel.selectAutorById(autorId);
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    };

};

const createAutor = async (req, res) => {
    try {
        const [result] = await AutoresModel.insertAutor(req.body);
        const [autor] = await AutoresModel.selectAutorById(result.insertId);
        res.json(autor[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    };
};

module.exports = { getAllAutores, getAutorById, createAutor };