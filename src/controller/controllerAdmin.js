const path = require("path")
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');

let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

function readDBFiltered() {
	return products.filter(product => product.show);
}

function readDB() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    formularioProducto: (req, res) => {
        const id = req.params.id;
		const product = products.find(product => product.id == id);
		return res.render("formProducts.ejs", { product });
        
    },

    create: (req, res) => {
        const id = req.body
        const productoNuevo = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            price: req.body.price,
            discount:req.body.discount,
            gender: req.body.gender,
            category: req.body.category,
            image: req.file.filename
        }

        products.push(productoNuevo);
        fs.writeFileSync (productsFilePath, JSON.stringify(products))
		return res.redirect("/formulario-productos")
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