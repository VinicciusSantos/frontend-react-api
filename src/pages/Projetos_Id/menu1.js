import React from "react";
import Data from "./Titulo";
import Tarefas from "./Tarefas";

function Menu1() {
    return (
        <div style={{padding:"20px"}}>
            <div className="cont_tituloprojeto align-items-start">
                <a href="/projetos" className="btn_primary" style={{width:"108px"}}>
                    <img src="../assets/voltar.svg" width="20px"></img>
                    <p>Voltar</p>
                </a>

                <div className="title_projeto_id">
                    <Data/>
                </div>
            </div>

            <div className="cont_tarefasdoprojeto">
                <div className="Title_exibirTarefasProjeto">
                    <h3>Tarefas do Projeto</h3>
                    <button className="btn_primary">Novo</button>
                </div>
                <div className="cont_table">
                    <Tarefas />
                </div>
            </div>
        </div>
    );
}
export default Menu1;
