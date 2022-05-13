const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerUser');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware")


router.get('/registro', guestMiddleware, controlador.registro)
router.get ('/registro-confirmacion', controlador.registroConfirmacion)
router.get ('/login', guestMiddleware, controlador.login)
router.post ('/login', controlador.loginProcess)
router.get ('/logout', controlador.logout)



module.exports = router;