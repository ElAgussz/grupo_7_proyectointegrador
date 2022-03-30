const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerUser');


router.get ('/login', controlador.login)
router.get('/register', controlador.register)
router.get('/profile', controlador.profile)




module.exports = router;