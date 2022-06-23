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
            <Nav className='d-flex flex-column' navbar style={{height:"100vh", width:"100px", backgroundColor:"#4E5C90"}}>
                <NavItem>
                    
                </NavItem> 
            </Nav>
        </div>
    );
}


export default Headers;