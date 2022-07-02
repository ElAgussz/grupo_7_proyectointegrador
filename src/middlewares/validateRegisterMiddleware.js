const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('nombre').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir tu apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir tu correo electrónico').bail().isEmail().withMessage('Tienes que escribir un correo electrónico válido'),
    body('password').notEmpty().withMessage('Tienes que escribir tu contraseña'),
    body('pais').notEmpty().withMessage('Tienes que elegir tu pais'),
    body('ciudad').notEmpty().withMessage('Tienes que escribir tu ciudad'),
    body('genero').notEmpty().withMessage('Tienes que elegir tu género'),
    body('cumpleaños').notEmpty().withMessage('Tienes que elegir tu fecha de nacimiento'),
    body('terminos').notEmpty().withMessage('Tienes que aceptar los términos y condiciones'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let extensionesPermitidas = [".jpg", ".png", "jpeg", "gif"];
        if (!file) {
            throw new Error ('Tienes que subir una imagen');
        } else {
            let extensionArchivo = path.extname(file.originalname);
            if (!extensionesPermitidas.includes(extensionArchivo)) {
                throw new Error ('Las extensiones permitidas son .jpg, .png, jpeg y gif' );
            }
        }
        return true;
    })
]

module.exports = validations
