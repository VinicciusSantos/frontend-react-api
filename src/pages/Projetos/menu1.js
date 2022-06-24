import React from "react";
import ExibirProjetos from "./data";

function Menu1() {
    return (
        <div className="menu1">
            <div >
                {/* Searchbar */}
                <div className="searchbar">
                    <input type="search" placeholder="Pesquise aqui..."></input>
                    <img src="assets/search.svg"></img>
                </div>

                { /* Projetos */}
                <div className="mostrarProjetos">
                    <h1>PROJETOS</h1>
                    <ExibirProjetos/>
                </div>
            </div>
        </div>
    );
}

export default Menu1;