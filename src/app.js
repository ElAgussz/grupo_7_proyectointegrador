//************* Requires **************/
const express = require("express");
const path = require("path");
const methodOverride = require("method-override"); // Para poder usar los métodos PUT y DELETE
const session = require("express-session")
const cookies = require('cookie-parser');
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")

//************* Path´s **************/
const publicPath = path.join(__dirname, "../", "public")
const viewspath = path.join(__dirname, "../src/views")



//************* Express **************/
const app = express();



//************* Template engines **************/
app.set("views", viewspath);
app.set ("view engine", "ejs")

app.use(express.static(publicPath));
app.use(methodOverride("_method"))
app.use(session({
    secret: "A la grande le puse cuca",
    resave: false,
    saveUninitialized: false
}));
app.use(cookies());
// app.use(userLoggedMiddleware); // VER PROBLEMAS ACA


//************* Rutas: requires & use **************/
const routerProducts = require('./routes/routesProducts.js');
const routerAdmin = require ('./routes/routesAdmin.js')
const routerUser = require('./routes/routesUser.js');
const router = require('./routes/routesMain.js');

app.use('/', router);
app.use('/', routerProducts);
app.use('/', routerUser);
app.use('/', routerAdmin);



//************* Config puerto **************/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log ("Se inició el servidor en el puerto " + PORT)
});