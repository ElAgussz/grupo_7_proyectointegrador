const path = require ("path")
const controlador = {
    index: (req, res) => {
        res.render ("index.ejs")
    },

    registroConfirmacion: (req, res) => {
        res.render ("registro-confirmacion.ejs")
    },

    formularioProductos: (req, res) => {
        res.render ("formProducts.ejs")
    },

}


module.exports = controlador;