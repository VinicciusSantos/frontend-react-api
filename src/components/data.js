import React, { Component } from 'react';
import api from '../api'

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
            {projetos.map(p => (
              <div key={p.id} className="d-flex justify-content-between">
                <p>{p.nome}</p>
                <p>
                <a href={"projetos/"+p.id}><button className='bttn'>Detalhes</button></a>
                </p>
              </div>
            ))}
        </div>
      )
    }
  }

  export default ExibirProjetos;