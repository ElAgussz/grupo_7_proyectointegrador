const express = require('express');
const router = express.Router();
const controlador = require('../controller/controller');


router.get ('/carrito', controlador.carrito)
router.get('/producto', controlador.producto)




module.exports = router;