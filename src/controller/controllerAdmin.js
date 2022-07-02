const path = require("path")
const fs = require('fs');
let db = require ('../database/models')


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
        
        return res.render("formProducts.ejs", );

    },

    create: (req, res) => { 
        
        db.Productos.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            genre_id: req.body.genre,
            category_id: req.body.category, 
            description: req.body.description,
            stock: req.body.stock,
            //image: req.file?.filename ?? product.image,
        })
        .then(() => {
            res.redirect("/formulario-productos")
        }) 

 
    },
    edicionProducto: (req, res) => {

        let producto = db.Productos.findByPk(req.params.id)
        let productoGenero = db.Generos.findAll(); 
        //let productoCategoria = db.Categorias.findAll();

        Promise.all([producto, productoGenero, /*productoCategoria*/])
            .then(function ([productos, generos, categorias]) {
                res.render("edicion-producto.ejs", { productos: productos, generos: generos, categorias: categorias })
            })

    },
    actualizarProducto: (req, res) => {
        db.Productos.update({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            genre_id: req.body.genre, 
            category_id: req.body.category, 
            description: req.body.description,
            stock: req.body.stock,
            //image: req.file?.filename ?? product.image,
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect("/editar/" + req.params.id)
    },
    eliminarProducto: (req, res) => {
        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        }) 

        res.redirect("/")
    },
}


module.exports = controlador;