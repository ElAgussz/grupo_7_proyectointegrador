const path = require ("path")
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    formularioProductos: (req, res) => {
        res.render("formProducts.ejs");
    },
    edicionProductos: (req, res) => {
        res.render("edicion-producto.ejs");
    }
}


module.exports = controlador;