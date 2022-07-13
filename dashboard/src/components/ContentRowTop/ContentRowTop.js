import React from "react"
import ProductList from './subcomponents/ProductList'
import LastProduct from './subcomponents/LastProduct.js'
import Total from './subcomponents/Total.js'
import CategoriaxProducto from "./subcomponents/CategoriaxProducto"


function ContentRowTop() {
	return (
		<div class="container-fluid">
			<div class="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 class="h3 mb-0 text-gray-800">Mundo Suculento</h1>
			</div>
			<Total />
			<LastProduct />
			<ProductList />
			<CategoriaxProducto />
		</div>
	)
}

export default ContentRowTop