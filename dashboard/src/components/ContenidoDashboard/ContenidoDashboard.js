import React from "react"
import ProductList from './subcomponents/ProductList'
import LastUser from './subcomponents/LastUser.js'
import Total from './subcomponents/Total.js'
import CategoriaxProducto from "./subcomponents/CategoriaxProducto"
import Logo from "./subcomponents/Logo.js"


function ContenidoDashboard() {
	return (
		<div class="container-fluid">
			<Logo />
			<Total />
			<LastUser />
			<ProductList />
			<CategoriaxProducto />
		</div>
	)
}

export default ContenidoDashboard