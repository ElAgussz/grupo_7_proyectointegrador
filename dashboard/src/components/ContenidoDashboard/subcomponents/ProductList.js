import React, { Component } from "react";


class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }

    /*apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }*/

    componentDidMount() {
        //this.apiCall("http://localhost:3009/products", this.mostrarProductos)
        fetch("http://localhost:3009/products")
            .then((response) => response.json())
            .then((product) => {
                console.log(product.data);
                this.setState({ productList: product.data})
                
            })
            .catch(error => console.log(error))
    }

    /*mostrarProductos = data => 
        this.setState(
            {
                productList: data.data
            }
        )*/

    mapper = (product, index) => {

        return (<div className="col-lg-6 mb-4" key={product.name + index}>
             <div className="card bg-dark text-white shadow">
                 <div className="card-body">{product.name}</div>
             </div>
        </div>)
    }

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
                            Hola estoy aca
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList