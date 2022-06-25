import React from "react";
import Data from "./data"
import Header from "./Header"
import Menu1 from "./menu1";

function Projetos(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header />
                <Menu1 />
            </div>
        </div>
    );
}

export default Projetos;