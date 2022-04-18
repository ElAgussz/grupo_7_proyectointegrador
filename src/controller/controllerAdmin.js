const path = require("path")
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    formularioProductos: (req, res) => {
        res.render("formProducts.ejs");
    },
    edicionProductos: (req, res) => {
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        res.render("edicion-producto.ejs", { product });
    },
    productoEditado: (req, res) => {
    //  falta la logica
    },
    eliminarProductos: (req, res) => {
        const id = req.params.id;
        products = products.map(product => {
            if (product.id != id) {
                return product;
            }
        })
        return res.redirect("/products");
    },
}


module.exports = controlador;