import React, { Component } from 'react';
import api from '../../api'
import { Table } from 'reactstrap';

class ExibirProjetos extends Component{
    state = {
      projetos: [],
    }
  
    async componentDidMount(){
      const response = await api.get('/projetos');
  
      this.setState({ projetos: response.data })
    }
  
    render() {
  
      const {projetos} = this.state;
  
      return(
        <div className="cont_table">
          <div>
            <table class="table">
              <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Inicio</th>
              </tr>
              {projetos.map(p => (
                <tr key={p.id}>
                  <td className='id_table'>{p.id}</td>
                  <td>{p.nome}</td>
                  <td>{p.data_criacao}</td> 
                </tr>
              ))}
            </table>
            </div>
        </div>
      )
    }
  }

  export default ExibirProjetos;