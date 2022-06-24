import React from "react";
import Data from "./data"
import Header from "./Header";

function Equipes(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="d-flex" style={{width: "90vw", height: "90vh", backgroundImage: "linear-gradient(113.43deg, #FFB74A -71.14%, #505050 16.53%, #595959 89.77%, #7196F3 141.93%)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", borderRadius: "20px"}}>
                <Header />
            </div>
        </div>
    );
}

export default Equipes;