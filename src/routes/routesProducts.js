const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerProducts');


router.get ('/carrito', controlador.carrito)
router.get('/producto/:id', controlador.producto)




module.exports = router;