import React from "react";
import Headers from "../Headers";
import Data from "./data";

function Tarefas(){
    return (
        <div className="d-flex">
            <Headers />

            <div className="flex-columun">
                <h1>Pagina de tarefas</h1>
                <Data/>
            </div>
        </div>
    );
}
export default Tarefas;