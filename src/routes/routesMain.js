const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerMain');

router.get('/', controlador.index);
router.get('/search', controlador.search); 


module.exports = router;