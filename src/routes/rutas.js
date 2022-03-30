const express = require('express');
const router = express.Router();
const controlador = require('../controller/controller');

router.get('/', controlador.index);

router.get('/producto', controlador.producto)

router.get ('/carrito', controlador.carrito)

router.get ('/login', controlador.login)

router.get ('/registro', controlador.registro)

router.get ('/registro-confirmacion', controlador.registroConfirmacion)

router.get ('/formulario-productos', controlador.formularioProductos)



module.exports = router;