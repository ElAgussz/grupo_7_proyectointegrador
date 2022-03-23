const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, "../public")

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log("Se inició el servidor en el puerto " + PORT)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.get('/producto', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "productDetail.html"))
})

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "productCart.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "register.html"))
})

app.get('/registro-confirmacion', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "registro-confirmacion.html"))
})

app.get('/registro-avatar', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "registro-avatar.html"))
})


app.get('/formulario-productos', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "formProducts.html"))
})
