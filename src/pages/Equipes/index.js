import React from "react";
import Headers from "../Headers";
import Data from "./data"

function Equipes(){
    return (
        <div className="d-flex">
            <Headers />

            <div className="flex-columun">
                <h1>Pagina de Equipes</h1>
                <Data/>
            </div>
        </div>
    );
}

export default Equipes;