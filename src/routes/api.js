const router = require('express').Router();

// Rutas
router.use('/posts', require('./api/posts'));
router.use('/autores', require('./api/autores'));

module.exports = router;