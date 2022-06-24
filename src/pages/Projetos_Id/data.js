import React, { Component } from 'react';
import api from '../../api'

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
            <table className="table">
              <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Inicio</th>
                  <th></th>
              </tr>
              {projetos.map(p => (
                <tr key={p.id}>
                  <td className='id_table'>{p.id}</td>
                  <td>{p.nome}</td>
                  <td>{p.data_criacao.substring(0,10)}</td>
                  <td>
                    <button><a href={"projetos/"+p.id}>Detalhar</a></button>
                  </td>
                </tr>
              ))}
            </table>
            </div>
        </div>
      )
    }
  }

  export default ExibirProjetos;