import React from "react";
import Data from "./data";

function Menu1() {
    return (
        <div style={{padding:"20px"}}>
            <div className="cont_tituloprojeto align-items-start">
                <a href="/projetos" className="btn_primary" style={{width:"108px"}}>
                    <img src="../assets/voltar.svg" width="20px"></img>
                    <p>Voltar</p>
                </a>

                <div className="title_projeto_id">
                    <h1>PROJETO 01</h1>
                    <h2>GP-Inovação</h2>
                </div>
            </div>

            <div className="cont_tarefasdoprojeto">
                <div className="Title_exibirTarefasProjeto">
                    <h4>Tarefas do Projeto</h4>
                    <button className="btn_primary">Novo</button>
                </div>
                <div className="cont_table">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Inicio</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Menu1;
