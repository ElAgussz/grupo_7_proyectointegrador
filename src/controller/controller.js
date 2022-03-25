const path = require ("path")
const controlador = {
    index: (req, res) => {
        res.render ("index.ejs")
    },

    producto: (req, res) => {
        res.render ("productDetail.ejs")
    },

    carrito: (req, res) => {
        res.render ("productCart.ejs")
    },

    login: (req, res) => {
        res.render ("login.ejs")
    },

    registro: (req, res) => {
        res.render ("register.ejs")
    },

    registroConfirmacion: (req, res) => {
        res.render ("registro-confirmacion.ejs")
    },

    registroAvatar: (req, res) => {
        res.render ("registro-avatar.ejs")
    },

    formularioProductos: (req, res) => {
        res.render ("formProducts.ejs")
    },

}


module.exports = controlador;