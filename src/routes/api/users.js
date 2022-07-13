const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controller/api/usersAPIcontroller');

//Rutas
//Listado de productos
router.get('/users', usersAPIController.list);

//Detalle de un producto
router.get('/users/:id', usersAPIController.detail);


module.exports = router;