const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerUser');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware")


router.get('/register', guestMiddleware, controlador.register) // Vista del formulario de registro

router.post('register', controlador.processRegister) // Procesar el registro

// router.get ('/register-confirmation', controlador.registerConfirmacion)




router.get ('/login', guestMiddleware, controlador.login)
router.post ('/login', controlador.loginProcess)
router.get ('/logout', controlador.logout)



module.exports = router;