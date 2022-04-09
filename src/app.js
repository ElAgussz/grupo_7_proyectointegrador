//************* Requires **************/
const express = require("express");
const path = require("path");
const methodOverride = require("method-override"); // Para poder usar los métodos PUT y DELETE

//************* Path´s **************/
const publicPath = path.join(__dirname, "../", "public")
<<<<<<< HEAD
const router = require('./routes/routesMain.js');
const routerProducts = require('./routes/routesProducts.js');
const routerUser = require('./routes/routesUser.js');
const methodOverride = require("method-override");
=======
>>>>>>> cd18d04e3a2b00dcfd804ee12e1c78e9aa8a9dbd
const viewspath = path.join(__dirname, "../src/views")



//************* Express **************/
const app = express();



//************* Template engines **************/
app.set("views", viewspath);
app.set ("views engine", "ejs")

app.use(express.static(publicPath));
app.use(methodOverride("_method"))



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