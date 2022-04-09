const express = require('express');
const router = express.Router();
const controlador = require('../controller/controllerMain');

router.get('/', controlador.index);
<<<<<<< HEAD

=======
>>>>>>> cd18d04e3a2b00dcfd804ee12e1c78e9aa8a9dbd
router.get('/search', controlador.search); 


module.exports = router;