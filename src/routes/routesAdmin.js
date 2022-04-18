const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerAdmin');


router.get('/formulario-productos', controlador.formularioProducto)

router.get('/edicion-productos/', controlador.edicionProducto)
router.put('/edicion-productos/', controlador.actualizarProducto)

module.exports = router;


