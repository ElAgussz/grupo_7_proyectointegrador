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
			id: products.length > 0 ? products[ products.length - 1 ].id + 1 : 1,
			...req.body,
			image: req.file?.filename ?? "default-image.png"
        }

        products.push(productoNuevo);
        fs.writeFileSync(productsFilePath, JSON.stringify(products))
        return res.redirect("/formulario-productos")
    },

    edicionProducto: (req, res) => {
        const id = req.params.id;
        
        const product = products.find(product => {
            if(product.id == id && product.show == true){
                return res.render("edicion-producto.ejs", {product})
            }
        })

        return res.send("no existe pa")

    },
    actualizarProducto: (req, res) => {
        const id = req.params.id;
        products = products.map(product => {
            if (product.id == id) {
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
    eliminarProducto: (req, res) => {
        const id = req.params.id;
		products = products.map(product => {
			if(product.id == id){
				product.show = false
			}
			return product;
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
		return res.redirect("/");
    },
}


module.exports = controlador;