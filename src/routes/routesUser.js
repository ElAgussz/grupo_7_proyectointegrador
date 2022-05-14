const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerUser');
const multer = require('multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/images/avatars')
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.filename)}`;
        cb(null, filename)
    }
})

const upload = multer({storage});


router.get('/register', guestMiddleware, controlador.register) // Vista del formulario de registro

router.post('register', upload.single("avatar"), controlador.processRegister) // Procesar el registro

// router.get ('/register-confirmation', controlador.registerConfirmacion)




router.get ('/login', guestMiddleware, controlador.login)
router.post ('/login', controlador.loginProcess)
router.get ('/logout', controlador.logout)



module.exports = router;