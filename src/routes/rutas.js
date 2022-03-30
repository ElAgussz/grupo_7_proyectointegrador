const express = require('express');
const router = express.Router();
const controlador = require('../controller/controller');

router.get('/', controlador.index);

router.get ('/registro-confirmacion', controlador.registroConfirmacion)

router.get ('/formulario-productos', controlador.formularioProductos)



module.exports = router;