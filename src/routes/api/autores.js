const router = require('express').Router();
const AutoresController = require('../../controllers/autores.controller');
const { checkIfAutorIdExists } = require('../../middlewares/autores.middleware');

// Peticiones GET
router.get('/', AutoresController.getAllAutores);
router.get('/:autorId', checkIfAutorIdExists, AutoresController.getAutorById);

//Peticiones POST
router.post('/', AutoresController.createAutor);

module.exports = router;