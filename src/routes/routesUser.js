const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerUser');


router.get ('/login', controlador.login)
router.get('/registro', controlador.registro)
router.get ('/registro-confirmacion', controlador.registroConfirmacion)




module.exports = router;