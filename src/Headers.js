import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    Image
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div> 
            <Nav className='d-flex align-items-center' navbar style={{height:"100vh", width:"100px", backgroundColor:"#4E5C90"}}>
                <NavItem className='pb-4' style={{marginTop:"183px"}}>
                    <img src='assets/Nav_projetos.png'></img>
                </NavItem>
                <NavItem className='pb-4'>
                    <img src='assets/Nav_equipes.png'></img>
                </NavItem> 
                <NavItem className='pb-4'>
                    <img src='assets/Nav_pessoas.png'></img>
                </NavItem> 
                <NavItem className='pb-4'>
                    <img src='assets/Nav_tarefas.png'></img>
                </NavItem> 
            </Nav>
        </div>
    );
}


export default Headers;