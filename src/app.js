const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, "../", "public")
const router = require('./routes/rutas.js');

app.use(express.static(publicPath));

app.set ("views engine", "ejs")

app.listen(PORT, () => {
    console.log ("Se inició el servidor en el puerto " + PORT)
})

app.use('/', router);