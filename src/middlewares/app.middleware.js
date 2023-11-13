const dayjs = require('dayjs');
const fs = require('node:fs/promises');

require('dotenv').config();

const logAllPetitions = async (req, res, next) => {
    const linea = `[${dayjs().format('DD-MM-YYYY HH:mm:ss')}] Método ${req.method}. Url: ${process.env.URL}${req.url}`;
    await fs.appendFile('./main.log', linea + '\n');
    next();
};

module.exports = { logAllPetitions };