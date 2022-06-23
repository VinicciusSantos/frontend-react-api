import React from "react";
import Headers from "../Headers";
import Data from "./data";
import Taskdata from "./Taskdata";

function Tarefas(){
    return (
        <div className="d-flex">
            <Headers />

            <div className="flex-columun">
                <h1 class="mt-5">Pagina de tarefas</h1>
                <Taskdata/>
            </div>
        </div>
    );
}
export default Tarefas;
