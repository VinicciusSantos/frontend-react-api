import React from "react";

function Searchbar () {
    return (
        <div style={{width: "500px", height: "53px", borderRadius: "30px", backgroundColor:"#717171"}}>
            <input style={{width: "400px", height:"53px", marginLeft:"30px", marginRight:"20px", border:"none", outline:"none", color: "#FFFFFF", backgroundColor:"#717171"}} type="search" placeholder="Pesquise aqui..."></input>
            <img src="assets/search.svg"></img>
        </div>
    );
}

export default Searchbar;