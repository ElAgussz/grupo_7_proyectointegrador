const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controller/api/productsAPIcontroller');

//Rutas
//Listado de productos
router.get('/products', productsAPIController.list);
//Detalle de una película
router.get('/products/:id', productsAPIController.detail);


module.exports = router;