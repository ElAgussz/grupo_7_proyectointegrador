const path = require ("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    index: (req, res) => {
        const productoDestacado = products.filter(products => products.category == "producto-destacado");
		const nuevoIngreso = products.filter(products => products.category == "nuevo-ingreso");
		return res.render("index",{productoDestacado,nuevoIngreso,toThousand})
        
    },
    search: (req, res) => {             //RUTA PARA SEARCH-BAR
		res.render("results.ejs")
    },    


}


module.exports = controlador;