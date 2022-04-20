const path = require("path")
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
        const product = products.map(product => {
            if(products.id == id){
                product.name = req.body.name,
                product.price = req.body.price,
                product.discount = req.body.discount,
                product.gender = req.body.gender,
                product.category = req.body.category,
                product.description = req.body.description,
                product.imagen = req.file.filename
            }
            return product;
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(product, null, 2))
		return res.redirect("/productos");
    
    },
    eliminarProductos: (req, res) => {
        const id = req.params.id;
        const product = products.map(product => {
            if (products.id != id) {
                return product;
            }
        })
        return res.redirect("/products");
    },
    prueba:(req, res) => {
        const id = req.params.id;
		const product = products.find(product => products.id == id);
		return res.render("edicion-producto.ejs", { product });
    }
}


module.exports = controlador;