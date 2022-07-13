import React from "react";

function GenresInDB () {
    return( 
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Listado De Productos</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Listado de los ultimos 5 productos
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
    
}

export default GenresInDB