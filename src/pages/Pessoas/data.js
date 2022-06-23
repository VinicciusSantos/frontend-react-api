import React, { Component } from 'react';
import api from '../../api'
import { Table } from 'reactstrap';

class exibirPessoas extends Component{
    state = {
      pessoas: [],
    }
  
    async componentDidMount(){
      const response = await api.get('/pessoas');
  
      this.setState({ pessoas: response.data })
    }
  
    render() {
  
      const {pessoas} = this.state;
  
      return(
        <div>
          <table class="table">
            {pessoas.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{p.profissao}</td>
              </tr>
            ))}
          </table>
        </div>
      )
    }
  }

  export default exibirPessoas;