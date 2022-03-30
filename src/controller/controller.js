const path = require ("path")
const controlador = {
    index: (req, res) => {
        res.render ("index.ejs")
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

    formularioProductos: (req, res) => {
        res.render ("formProducts.ejs")
    },

}


module.exports = controlador;