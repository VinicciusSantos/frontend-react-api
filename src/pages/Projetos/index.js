import React from "react";
import Headers from "../Headers";
import Footer from "../Footer"

function Projetos(){
    return (
        <div className="d-flex">
            <Headers />

            <div className="flex-columun">
                <h1>Pagina de Projetos</h1>
                <Footer />
            </div>
        </div>
    );
}

export default Projetos;