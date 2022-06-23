import React from "react";
import Headers from "../Headers";
import Taskdata from "./Taskdata";


function Tarefas(){
    return (
        <div className="d-flex">
            <Headers />

            <div className="flex-columun">
                <h1>Pagina de Tarefas</h1>
                <Taskdata />
            </div>
        </div>
    );
}

export default Tarefas;
