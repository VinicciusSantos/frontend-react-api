import React from "react";
import Headers from "../Headers";
import Data from "./data"

function Pessoas(){
    return (
        <div className="d-flex">
            <Headers />

            <div className="flex-columun">
                <h1>Pagina de Pessoas</h1>
                <Data/>
            </div>
        </div>
    );
}
export default Pessoas;