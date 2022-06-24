import React from "react";

function Menu1() {
    return (
        <div className="menu1">
            <div >
                {/* Searchbar */}
                <div style={{width: "500px", height: "53px", borderRadius: "30px", backgroundColor:"#717171", marginTop: "34px"}}>
                    <input style={{width: "400px", height:"53px", marginLeft:"30px", marginRight:"20px", border:"none", outline:"none", color: "#FFFFFF", backgroundColor:"#717171"}} type="search" placeholder="Pesquise aqui..."></input>
                    <img src="assets/search.svg"></img>
                </div>

                { /* Projetos */}
                <div style={{marginTop: "67px"}}>
                    <h1>PROJETOS</h1>
                </div>
            </div>
        </div>
    );
}

export default Menu1;