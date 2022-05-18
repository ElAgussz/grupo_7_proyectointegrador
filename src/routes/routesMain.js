const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerMain');

router.get('/', controlador.index);


module.exports = router;