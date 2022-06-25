import React from "react";
import Data from "./data"
import Header from "../../components/header"
import Menu1 from "./menu1";

function Projetos() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header>
                    <a href="/projetos">
                        <div className="btn1">
                            <div className="btn1_p1">
                                <img width="40px" height="40px" src="assets/projetos_active.svg"></img>
                                <h2>Projetos</h2>
                            </div>
                            <div className="btn1_p2"></div>
                        </div>
                    </a>

                    <a href="/equipes">
                        <div className="btn2">
                            <div className="btn2_p1">
                                <img width="40px" height="40px" src="assets/equipes.svg"></img>
                                <h2>Equipes</h2>
                            </div>
                            <div className="btn2_p2"></div>
                        </div>
                    </a>

                    <a href="/pessoas">
                        <div className="btn2">
                            <div className="btn2_p1">
                                <img width="40px" height="40px" src="assets/pessoas.svg"></img>
                                <h2>Pessoas</h2>
                            </div>
                            <div className="btn2_p2"></div>
                        </div>
                    </a>

                    <a href="/tarefas">
                        <div className="btn2">
                            <div className="btn2_p1">
                                <img width="40px" height="40px" src="assets/tarefas.svg"></img>
                                <h2>Tarefas</h2>
                            </div>
                            <div className="btn2_p2"></div>
                        </div>
                    </a>
                </Header>
                
                <Menu1/>
            </div>
        </div>
    );
}

export default Projetos;
