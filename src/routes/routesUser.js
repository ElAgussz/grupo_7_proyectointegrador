const express = require('express');
const router = express.Router();
const path = require("path");
const controlador = require('../controller/controllerUser');
const multer = require('multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware");
const validations = require('../middlewares/validateRegisterMiddleware')



// Para procesar la imagen de perfil en el formulario de registro

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/avatars'))
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName)
    }
})

const upload = multer({storage});


// Vista del formulario de registro
router.get('/register', guestMiddleware, controlador.register)
// Procesar el registro
router.post('/register', upload.single("avatar"), validations, controlador.processRegister) // Procesar el registro
// Proceso de confirmacion luego de poner los datos correctamente en el formulario
router.get ('/register-confirmation', controlador.registerConfirmation)




router.get ('/login', controlador.login)
router.post ('/login',validations, controlador.loginProcess)
router.get ('/logout', controlador.logout)


module.exports = router;