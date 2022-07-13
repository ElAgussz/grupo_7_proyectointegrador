import React from "react";

function LastMovieInDB () {
    return( 
        <div className="row">
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto publicado</h5>
                </div>
                <div className="card-body">
                    <p>Aca va el ultimo producto + descripcion e imagen XD Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver mas detalles</a>
                </div>
            </div>
        </div>
    </div>
    )
    
}

export default LastMovieInDB
