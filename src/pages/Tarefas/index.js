import React from "react";
import Data from "./data";
import Header from "../Projetos/Header";


function Tarefas(){


    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="" style={{width: "90vw", height: "90vh", backgroundImage: "linear-gradient(113.43deg, #FFB74A -71.14%, #505050 16.53%, #595959 89.77%, #7196F3 141.93%)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", borderRadius: "20px"}}>

                <div class="d-flex">
                    <Header />
                    
                    
                    <div class="" style={{width:"551px", height:"211px", backgroundColor: "#595959", borderRadius:"20px", marginLeft:"30px"}}>
                        <input type={"button"} value="Voltar" style={{width: "108px", height: "36px", backgroundColor:"#FFB74A", boxShadow: "0px 0px 4px #FFB74A", borderRadius:"10px", border:"none", color:"#FFF",  marginBottom:"20px", margin:"10px"}}>
                        </input>

                        <div style={{width: "300px", height: "114px", fontSize:"48px", lineHeight:"57px", marginLeft:"20px", textShadow:"0px 0px 4px #FFB74A"}}>
                            <p style={{ color:"#FFB74A"}}>PROJETO 01</p>
                            <p style={{color: "#F2CA9A"}}>GP-Inovação</p>
                        </div>

                    <div style={{width:"551px", height:"528px", marginTop:"149px", backgroundColor: "#595959", borderRadius:"20px"}}>
                        <div class="d-flex justify-content-between align-items-center" style={{marginLeft:"20px", marginRight:"10px"}}>
                            <h4 style={{color:"#FFB74A", textShadow:"0px 0px 4px #FFB74A", width:"304px", height:"43px", fontSize: "36px", lineHeight: "43px"}}>Tarefas do Projeto</h4>
                            <input type={"button"} value="Novo" style={{width: "108px", height: "36px", backgroundColor:"#FFB74A", boxShadow: "0px 0px 4px #FFB74A", borderRadius:"10px", border:"none", color:"#FFF", marginBottom:"20px", margin:"10px"}}></input>
                        </div>
                        <div style={{width:"514px", height:"445px", backgroundColor: "#717171", borderRadius:"20px", marginLeft:"20px"}}>
                            <div class="d-flex justify-content-between" style={{width:"358.75px", height:"24.29", color:"#FFB74A", fontSize:"20px", lineHeight:"24px", marginLeft:"20px"}}>
                                <h6>Id</h6>
                                <h6>Nome</h6>
                                <h6>Inicio</h6> 
                            </div>
                             
                            <input type={"button"} value="Detalhar" style={{width: "91.45px", height:"17.44px", backgroundColor:"#FFB74A", border:"none", borderRadius:"10px", color:"#FFF", fontSize:"14px", lineHeight:"17px"}}></input>                  
                        </div>
                    </div>
                    </div>

                </div>
                </div>
        </div>
    );
}
export default Tarefas;
