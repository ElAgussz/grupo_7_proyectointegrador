const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerProducts');


router.get ('/carrito', controlador.carrito)
router.get('/producto', controlador.producto)
router.put('products/:id', controlador.editar)
router.delete('products/:id', controlador.borrar)




module.exports = router;