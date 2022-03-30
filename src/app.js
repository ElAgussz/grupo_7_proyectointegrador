const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, "../", "public")
const router = require('./routes/rutas.js');
const routerProducts = require('./routes/routesProducts.js');
const routerUser = require('./routes/routesUser.js');
const methodOverride = require("method-override");
const viewspath = path.join(__dirname, "../src/views")


app.set("views", viewspath);
app.set ("views engine", "ejs")


app.use(express.static(publicPath));
app.use(methodOverride("_method"))


app.use('/', router);
app.use('/', routerProducts);
app.use('/', routerUser);


app.listen(PORT, () => {
    console.log ("Se inició el servidor en el puerto " + PORT)
})
