import React, {Component} from "react";

class Total extends Component {


    constructor() {
        super();
        this.state = {
            totalProducts: [],
            // totalCategories: 0,
            // totalUsers: []
        }
    }

    componentDidMount() {

        fetch("http://localhost:3009/products")
            .then((response) => response.json())
            .then((product) => {
                this.setState({
                    totalProducts: product.data,
                })
            })
    }

    totalDeProductos = (product, index) => (
            <div className="h5 mb-0 font-weight-bold text-gray-800" key={product.id + index}>{product.name}</div>
    )


    // totalDeUsers = (users, index) => (
    //     <div className="col mr-2" key={users.id + index}>
    //         <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total De Usuarios</div>
    //         <div className="h5 mb-0 font-weight-bold text-gray-800">{users.count}</div>
    //     </div>
    // )


    render() {

        return (
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total De Productos</div>
                                {
                                    this.state.totalProducts.map(this.totalDeProductos)
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total De Usuarios</div>
                                {
                                    // this.state.totalUsers.map(this.totalDeUsers)
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total De Categorias</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        )
    }


}

export default Total