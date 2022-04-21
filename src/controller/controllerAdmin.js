const path = require("path")
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    formularioProducto: (req, res) => {
        res.render("formProducts.ejs");
    },
    edicionProducto: (req, res) => {
        const id = req.params.id;
		const product = products.find(product => product.id == id);
		return res.render("edicion-producto.ejs", { product });
    },
    actualizarProducto: (req, res) => {
        const id = req.params.id;
        products = products.map(product => {
            if(product.id == id){
                product.name = req.body.name,
                product.price = req.body.price,
                product.discount = req.body.discount,
                product.gender = req.body.gender,
                product.category = req.body.category,
                product.description = req.body.description,
                product.image = req.file?.filename ?? product.image
            }
            return product;
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
		return res.redirect("/");
    
    },
    eliminarProductos: (req, res) => {
        const id = req.params.id;
        products = products.filter(product => {
            if (product.id != id) {
                return product;
            }
        })
        return res.redirect("/");
    },
}


module.exports = controlador;