const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerAdmin');


router.get('/formulario-productos', controlador.formularioProductos)

router.get('/edicion-productos', controlador.edicionProductos)
router.post('/edicion-productos', controlador.productoEditado)

module.exports = router;


