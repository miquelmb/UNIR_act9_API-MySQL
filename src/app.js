const express = require('express');
const cors = require('cors');
const { logAllPetitions } = require('./middlewares/app.middleware');

// Creación de instancia de express app
const app = express();

// Configuración express app
app.use(cors()); // Integración de CORS middleware
app.use(express.json()); // Parsear requests en formato JSON

// Middleware para el registro de todas las peticiones entrantes
app.use(logAllPetitions);

// Ruta
app.use('/api', require('./routes/api'));

module.exports = app;