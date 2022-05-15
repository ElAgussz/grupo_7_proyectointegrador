const express = require('express');
const router = express.Router();
const path = require("path");
const controlador = require('../controller/controllerUser');
const multer = require('multer');
const { body } = require('express-validator')
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware");


// Para procesar la imagen de perfil en el formulario de registro

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars')
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName)
    }
})

const upload = multer({storage});

// Validar los campos del formulario de registro

const validations = [
    body('nombre').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir tu apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir tu correo electrónico').bail().isEmail().withMessage('Tienes que escribir un correo electrónico válido'),
    body('contraseña').notEmpty().withMessage('Tienes que escribir tu contraseña'),
    body('pais').notEmpty().withMessage('Tienes que elegir tu pais'),
    body('ciudad').notEmpty().withMessage('Tienes que escribir tu ciudad'),
    body('genero').notEmpty().withMessage('Tienes que elegir tu género'),
    body('cumpleaños').notEmpty().withMessage('Tienes que elegir tu fecha de nacimiento'),
    body('terminos').notEmpty().withMessage('Tienes que aceptar los términos y condiciones'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let extensionesPermitidas = [".jpg", ".png"];
        if (!file) {
            throw new Error ('Tienes que subir una imagen');
        } else {
            let extensionArchivo = path.extname(file.originalname);
            if (!extensionesPermitidas.includes(extensionArchivo)) {
                throw new Error ('Las extensiones permitidas son .jpg y .png' );
            }
        }
        return true;
    })
]


// Vista del formulario de registro
router.get('/register', guestMiddleware, controlador.register)
// Procesar el registro
router.post('/register', upload.single("avatar"), validations, controlador.processRegister) // Procesar el registro
// Proceso de confirmacion luego de poner los datos correctamente en el formulario
router.get ('/register-confirmation', controlador.registerConfirmation)




router.get ('/login', guestMiddleware, controlador.login)
router.post ('/login', controlador.loginProcess)
router.get ('/logout', controlador.logout)



module.exports = router;