import React from 'react';
import GraficoProjetos from '../GraficoProjetos';

import {
    Container,
    Header,
    Grafico,
    TopoGrafico,
    Legenda,
    Filtros
} from './styles';

import { Dropdown } from 'react-bootstrap';

function Menu() {
    return (
        <Container>
            <Header>
                <h1>Projetos</h1>
            </Header>

            <Grafico>
                <TopoGrafico>
                    <Legenda>
                        <span>Concluidos</span>
                        <span>Em Desenvolvimento</span>
                    </Legenda>
                      <Dropdown>
                          <Dropdown.Toggle variant="" id="dropdown-basic">
                              Filtros
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                </TopoGrafico>

                <GraficoProjetos/>
            </Grafico>
        </Container>
    );
}

export default Menu;
