const express = require('express');
const cors = require('cors');
const { logAllPetitions } = require('./middlewares/app.middleware');

const app = express();

app.use(cors());
app.use(express.json());


app.use(logAllPetitions);
// Rutas 
app.use('/api', require('./routes/api'));

module.exports = app;