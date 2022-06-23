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
      <div>
          {tarefas.map(tarefas => (
            <div class="list-group" key={tarefas.id}>
              <div class="list-group-item">{tarefas.id} {tarefas.nome}</div>
            </div>
          ))}
      </div>
    )
  }
}

export default taskdata;