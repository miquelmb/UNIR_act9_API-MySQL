const router = require('express').Router();

const AutoresController = require('../../controllers/autores.controller');

// Peticiones GET
router.get('/', AutoresController.getAllAutores);

//Peticiones POST
router.post('/', AutoresController.createAutor);

module.exports = router;