import React, { Component } from "react";


class ProductList extends Component {

    constructor() {
        super();
        this.state = {
            productList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3009/products")
            .then((response) => response.json())
            .then((product) => {
                this.setState({ productList: product.count})
            })
    }

    mapper = (product, index) => (
         <div className="col-lg-6 mb-4" key={product.count + index}>
             <div className="card bg-dark text-white shadow">
                 <div className="card-body">{product.count}
                 </div>
             </div>
         </div>
    )

    render() {
        return (
            <div className="col-lg-6 mb-4 centrar">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Listado De Productos</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                this.state.productList.map(this.mapper)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList