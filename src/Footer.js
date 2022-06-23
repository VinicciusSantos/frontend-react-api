import React, { Component } from 'react';
import api from './api'
import { Table } from 'reactstrap';

class Footer extends Component{
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
          {projetos.map(projeto => (
            <tr key={projeto.id}>
              <td>{projeto.id}</td>
              <td>{projeto.nome}</td>
              <td>{projeto.data_criacao}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Footer;