const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerAdmin');
const path = require('path')

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../images"))
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + "-"
        cb(null, file.fieldname + '-' + newFileName + path.extname(file.originalname))
    }
}) 

const upload = multer({ storage })



router.get('/formulario-productos', controlador.formularioProducto)

router.get('/editar/:id', controlador.edicionProducto)
router.get('/editar', controlador.prueba)
router.put('/editar/:id', upload.any(), controlador.actualizarProducto)

module.exports = router;


