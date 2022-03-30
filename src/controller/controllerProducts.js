const path = require ("path")
const controlador = {
    carrito: (req, res) => {
        res.render ("productCart.ejs")
    },
    producto: (req, res) => {
        res.render ("productDetail.ejs")
    },
}






module.exports = controlador;