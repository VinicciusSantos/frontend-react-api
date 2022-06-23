import React, { Component } from 'react';
import api from '../../api'
import { Table } from 'reactstrap';

class exibirTarefas extends Component{
    state = {
      tarefas: [],
    }
  
    async componentDidMount(){
      const response = await api.get('/tarefas');
  
      this.setState({ tarefas: response.data })
    }
  
    render() {
  
      const {tarefas} = this.state;
  
      return(
        <div>
          <table class="table">
            {tarefas.map(t => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.nome}</td>
              </tr>
            ))}
          </table>
        </div>
      )
    }
  }

  export default exibirTarefas;