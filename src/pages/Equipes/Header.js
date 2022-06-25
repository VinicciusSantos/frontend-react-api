import React from "react";

function Header () {
    return (
        <div className="header">
            <div className="header1"></div>

            <a href="/projetos">
                <div className="btn2">
                    <div className="btn2_p1">
                        <img width= "40px" height= "40px" src="assets/projetos.svg"></img>
                        <h2>Projetos</h2>
                    </div>
                    <div className="btn2_p2"></div>
                </div>
            </a>

            <a href="/equipes">
                <div className="btn1">
                    <div className="btn1_p1">
                        <img width= "40px" height= "40px" src="assets/equipes_active.svg"></img>
                        <h2>Equipes</h2>
                    </div>
                    <div className="btn1_p2"></div>
                </div>
            </a>

            <a href="/pessoas">
                <div className="btn2">
                    <div className="btn2_p1">
                        <img width= "40px" height= "40px" src="assets/pessoas.svg"></img>
                        <h2>Pessoas</h2>
                    </div>
                    <div className="btn2_p2"></div>
                </div>
            </a>

            <a href="/tarefas">
                <div className="btn2">
                    <div className="btn2_p1">
                        <img width= "40px" height= "40px" src="assets/tarefas.svg"></img>
                        <h2>Tarefas</h2>
                    </div>
                    <div className="btn2_p2"></div>
                </div>
            </a>

        </div>
    )
}

export default Header;