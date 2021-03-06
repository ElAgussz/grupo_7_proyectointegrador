const path = require ("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    index: (req, res) => {
    const nuevoIngreso = products.filter(products => products.category == "nuevo-ingreso");
		const oferta = products.filter(products => products.category == "sale");
		return res.render("index",{nuevoIngreso,oferta,toThousand})
        
    },
       


}


module.exports = controlador;