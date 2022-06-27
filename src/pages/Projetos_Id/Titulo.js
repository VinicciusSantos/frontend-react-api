import React, { useState, useEffect } from 'react';
import api from '../../api'
import { useParams } from "react-router-dom";

function Data() {

    const { id } = useParams();

    const [projetos, setProjetos] = useState([]);
    
    useEffect(() => {
      api
        .get('/projetos/'+id)
        .then(res => {
          setProjetos(res.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, []);

    return (
      <div>
        {projetos.map(projeto => (
        <p key={projeto.Id}>
          <h1>PROJETO {projeto.id}</h1>
          <h2>{projeto.nome}</h2>
          <p style={{color:"white"}}>{projeto.descricao}</p>
        </p>
        ))}
      </div>
    );
}

export default Data;