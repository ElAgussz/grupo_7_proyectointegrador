const path = require ("path")
const controlador = {

    login: (req, res) => {
        res.render ("login.ejs")
    },

    registro: (req, res) => {
        res.render ("register.ejs")
    },
    profile: (req, res) => {
        res.render ("profile.ejs")
    }
}





module.exports = controlador;