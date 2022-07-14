import React from "react";
import TotalCard from "./TotalCard";

function Total() {
    return (
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center"> 
                        <TotalCard />
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                           <TotalCard />
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <TotalCard />
                        </div>
                    </div>
                </div>
            </div>

            
        </div>

        
    )

}

export default Total