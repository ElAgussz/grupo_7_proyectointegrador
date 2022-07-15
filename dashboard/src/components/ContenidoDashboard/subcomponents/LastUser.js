import React, {Component} from "react";

class LastUser extends Component {
    
    constructor() {
        super();
        this.state = {
            userData: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3009/users")
            .then((response) => response.json())
            .then((user) => {
                this.setState({ userData: user.data })
            })
    }

    mapper = (user, index) => (
        <div className="card-body" key={user.name + index}>
            <p>Nombre completo: {user.nombre + " " + user.apellido}</p>
            <p>Ciudad: {user.ciudad}</p>
            <p>Email: {user.email}</p>
        </div>
    )




    render() {
        return (
            <div className="row centrar">
                <div className="col-lg-6 mb-4 centrar">
                    <div className="card shadow mb-4 centrar">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario registrado</h5>
                        </div>
                       {
                           this.state.userData.map(this.mapper)
                       }
                    </div>
                </div>
            </div>
        )
    }
}

export default LastUser

