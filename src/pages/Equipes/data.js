import React, { Component } from 'react';
import api from '../../api'
import { Table } from 'reactstrap';

class exibirEquipes extends Component{
    state = {
      equipes: [],
    }
  
    async componentDidMount(){
      const response = await api.get('/equipes');
  
      this.setState({ equipes: response.data })
    }
  
    render() {
  
      const {equipes} = this.state;
  
      return(
        <div>
          <table class="table">
            {equipes.map(e => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.nome}</td>
              </tr>
            ))}
          </table>
        </div>
      )
    }
  }

  export default exibirEquipes;