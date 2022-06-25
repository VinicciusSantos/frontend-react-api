import React from "react";
import Header from "./Header";

function Tarefas(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header />
            </div>
        </div>
    );
}
export default Tarefas;