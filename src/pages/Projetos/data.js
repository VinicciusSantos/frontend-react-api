import React, { Component } from 'react';
import api from '../../api'
import { Table } from 'reactstrap';

class exibirProjetos extends Component{
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
        <div>
          <table class="table">
            {projetos.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{p.data_criacao}</td>
                <td>{p.descricao}</td>
              </tr>
            ))}
          </table>
        </div>
      )
    }
  }

  export default exibirProjetos;