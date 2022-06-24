import React from "react";

function Header () {
    return (
        <div style={{marginLeft:"24px", marginTop: "20px"}}>
            <div style={{backgroundColor: "#595959", width: "270px", height: "189px", borderRadius: "15px"}}></div>
            <div style={{marginTop: "22px"}}>
                <a href="/projetos">
                    <div style={{width: "270px", height: "52px", boxShadow: "0px 0px 5px #FFB74A", borderRadius: "15px", backgroundColor: "#595959"}}>
                        <div style={{float:"left", display:"flex", marginTop:"5px", marginLeft:"11px"}}>
                            <img width= "40px" height= "40px" src="assets/projetos_active.png"></img>
                            <h2 style={{color: "#FFB74A", textShadow: "0px 0px 5px #FFB74A", marginLeft:"11px", marginTop: "6px", fontSize: "24px"}}>Projetos</h2>
                        </div>
                        <div style={{float:"right", backgroundColor: "#FFB74A", height: "52px", width: "11px", borderRadius: "0px 15px 15px 0px"}}></div>
                    </div>
                </a>
            </div>

            <div style={{marginTop: "22px"}}>
                <a href="/equipes">
                    <div style={{width: "270px", height: "52px", borderRadius: "15px", backgroundColor: "#595959"}}>
                        <div style={{float:"left", display:"flex", marginTop:"11px", marginLeft:"14px"}}>
                            <img width= "30px" height= "30px" src="assets/equipes.svg"></img>
                            <h2 style={{color: "#F2CA9A", marginLeft:"18px", marginTop: "3px", fontSize: "24px"}}>Equipes</h2>
                        </div>
                        <div style={{float:"right", backgroundColor: "#9D8B76", height: "52px", width: "11px", borderRadius: "0px 15px 15px 0px"}}></div>
                    </div>
                </a>
            </div>

            <div style={{marginTop: "22px"}}>
                <a href="/pessoas">
                    <div style={{width: "270px", height: "52px", borderRadius: "15px", backgroundColor: "#595959"}}>
                        <div style={{float:"left", display:"flex", marginTop:"11px", marginLeft:"14px"}}>
                            <img width= "30px" height= "30px" src="assets/pessoas.svg"></img>
                            <h2 style={{color: "#F2CA9A", marginLeft:"18px", marginTop: "3px", fontSize: "24px"}}>Pessoas</h2>
                        </div>
                        <div style={{float:"right", backgroundColor: "#9D8B76", height: "52px", width: "11px", borderRadius: "0px 15px 15px 0px"}}></div>
                    </div>
                </a>
            </div>

            <div style={{marginTop: "22px"}}>
                <a href="/tarefas">
                    <div style={{width: "270px", height: "52px", borderRadius: "15px", backgroundColor: "#595959"}}>
                        <div style={{float:"left", display:"flex", marginTop:"11px", marginLeft:"14px"}}>
                            <img width= "30px" height= "30px" src="assets/tarefas.svg"></img>
                            <h2 style={{color: "#F2CA9A", marginLeft:"18px", marginTop: "3px", fontSize: "24px"}}>Tarefas</h2>
                        </div>
                        <div style={{float:"right", backgroundColor: "#9D8B76", height: "52px", width: "11px", borderRadius: "0px 15px 15px 0px"}}></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Header;