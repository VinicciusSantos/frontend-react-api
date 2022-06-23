import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    Popover,
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className=''> 
            <Nav className='d-flex align-items-center' navbar style={{height:"100vh", width:"50px",backgroundColor:"#4E5C90"}}>
                <NavItem className='pb-4' style={{marginTop:"250px"}}>
                    <a href="/projetos"><img src='assets/Nav_projetos.png' style={{width:"30px"}}></img></a>
                </NavItem>
                <NavItem className='pb-4'>
                    <a href="/equipes"><img src='assets/Nav_equipes.png' style={{width:"30px"}}></img></a>
                </NavItem> 
                <NavItem className='pb-4'>
                    <a href="/pessoas"><img src='assets/Nav_pessoas.png' style={{width:"30px"}}></img></a>
                </NavItem> 
                <NavItem className='pb-4'>
                    <a href="/tarefas"><img src='assets/Nav_tarefas.png' style={{width:"30px"}}></img></a>
                </NavItem> 
            </Nav>
        </div>
    );
}


export default Headers;