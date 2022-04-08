const path = require ("path")
const controlador = {
    carrito: (req, res) => {
        res.render("productCart.ejs");
    },
    producto: (req, res) => {
        res.render("productDetail.ejs");
    },
    
    
    
    
    
    
    
    editar: (req, res) => {
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        res.redirect("/products");
    },
    borrar: (req, res) => {
       const id = req.params.id;
       products = products.filter(product => product.id != id);
       res.redirect("/products");
    },

}






module.exports = controlador;