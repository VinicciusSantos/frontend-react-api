import React, { useState, useEffect } from 'react';
import Titulo from "../pages/Projetos_Id/Titulo"


function AllProjects(){
    return(
        <div className="allp">
            <div>
                <h5>Todos os projetos</h5>
                <button  className='opbttn'>Filtros
                    <img src="assets/Group (1).png"></img>
                </button>
                <input type="search" placeholder="Pesquise aqui..." className='search'></input>
                <button><img src="assets/search.png"></img></button>
            </div>

            <div className="cards">
                <Titulo/>
            </div>
        </div>
    )
}

export default AllProjects;