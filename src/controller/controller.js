const path = require ("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    index: (req, res) => {
        const productoDestacado = products.filter(products => products.category == "producto-destacado");
		const nuevoIngreso = products.filter(products => products.category == "nuevo-ingreso");
		return res.render("index.ejs",{productoDestacado,nuevoIngreso,toThousand})
        
    },
    search: (req, res) => {             //RUTA PARA SEARCH-BAR
		res.render("results.ejs")
    },    

    registroConfirmacion: (req, res) => {
        res.render ("registro-confirmacion.ejs")
    },

    formularioProductos: (req, res) => {
        res.render ("formProducts.ejs")
    },

    edicionProductos: (req, res) => {
        res.render ("edicion-producto.ejs")
    },

}


module.exports = controlador;