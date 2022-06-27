import React, { useState, useEffect } from 'react';
import api from '../../api'
import { useParams } from "react-router-dom";

function Tarefas() {

    const { id } = useParams();

    const [tarefas, setTarefas] = useState([]);
    useEffect(() => {
      api
        .get('/projetos/'+id+'/tarefas')
        .then(res => {
          setTarefas(res.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, []);

    return (
        <div className="cont_table">
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarefas.map(t => (
                            <tr key={t.id}>
                                <td className='id_table'>{t.id}</td>
                                <td>{t.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tarefas;