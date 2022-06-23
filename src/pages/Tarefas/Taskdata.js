import React, { Component } from 'react';
import { Table } from 'reactstrap';
import api from '../../api';

class taskdata extends Component{
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

      <div class="container-fluid mt-5 ">
        <Table striped bordered hover>
            <thead>
              <tr>
                  <th>Nome</th>
                  <th>Descriçao</th>
                  <th>Data de criação</th>
              </tr>
            </thead>
            <tbody>
               {tarefas.map(tarefas => (
                    <tr key={tarefas.id}>
                      <td>
                        {tarefas.nome}
                      </td>
                      <td> {tarefas.descricao}</td>
                      <td>{tarefas.data_criacao}</td>
                      </tr>
                    ))}
            </tbody>
        </Table>
      </div>
    )
  }
}

export default taskdata;
