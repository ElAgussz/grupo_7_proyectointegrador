const path = require ("path")
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {

    login: (req, res) => {
        res.render ("login.ejs")
    },

    registro: (req, res) => {
        res.render ("register.ejs")
    },

    registroConfirmacion: (req, res) => {
        res.render ("registro-confirmacion.ejs")
    },

}





module.exports = controlador;