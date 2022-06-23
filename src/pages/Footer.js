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
        <div class="d-flex mt-4" style={{marginLeft: "-2rem"}}>
          {projetos.map (projeto => (
            <div className='d-flex  ms-5'>
              <div style={{backgroundColor: "#DBAB4E", height:"100%", width: "16px", marginRight:"-16px", zIndex:"1", borderRadius: "20px 0 0 20px"}}></div>
              <div class="card" style={{height: "20vh", width: "242px", borderRadius: "20px"}} key={projeto.id}>
                <div class="card-body" style={{marginLeft: "8px"}}>
                  <p class="card-text text-center fw-normal">{projeto.nome}</p>
                  <p class="text-center fw-light" style={{fontSize: "10px", marginTop: "-10%"}}>+ informações</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    )
  }
}

export default Footer;
