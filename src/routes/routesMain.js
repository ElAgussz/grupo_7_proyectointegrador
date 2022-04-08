const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerMain');

router.get('/', controlador.index);
router.get('/search', mainController.search); 


module.exports = router;