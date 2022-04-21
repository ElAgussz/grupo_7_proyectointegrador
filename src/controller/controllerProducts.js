const path = require("path")
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    carrito: (req, res) => {
        res.render("productCart.ejs");
    },
    producto: (req, res) => {
        const id = req.params.id;
		const product = products.find(product => product.id == id);
            if (id > product) {
                res.redirect ('index.ejs')
            }
            return res.render("productDetail.ejs", { product, toThousand });
    },
}






module.exports = controlador;