const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerProducts');


router.get ('/carrito', controlador.carrito)
<<<<<<< HEAD
router.get('/producto', controlador.producto)
router.put('products/:id', controlador.editar)
router.delete('products/:id', controlador.borrar)
=======
router.get('/producto/:id', controlador.producto)
>>>>>>> cd18d04e3a2b00dcfd804ee12e1c78e9aa8a9dbd




module.exports = router;