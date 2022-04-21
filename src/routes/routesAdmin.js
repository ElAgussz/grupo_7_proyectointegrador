const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerAdmin');
const path = require('path')

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images"))
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + "-"
        cb(null, file.fieldname + '-' + newFileName + path.extname(file.originalname))
    }
}) 

const upload = multer({ storage })



router.get('/formulario-productos', controlador.formularioProducto);
router.post('/formulario-productos', upload.single("image"), controlador.create);

router.get('/editar/:id', controlador.edicionProducto)
router.put('/editar/:id', upload.single("image"), controlador.actualizarProducto)

module.exports = router;


