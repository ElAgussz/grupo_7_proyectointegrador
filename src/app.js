const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, "../", "public")
const viewspath = path.join(__dirname, "../src/views")
app.set("views", viewspath);
const router = require('./routes/rutas.js');
const router = require('./routes/routesProducts.js');
app.set ("views engine", "ejs")
app.use(express.static(publicPath));


app.listen(PORT, () => {
    console.log ("Se inició el servidor en el puerto " + PORT)
})

app.use('/', router);
