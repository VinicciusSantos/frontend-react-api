import React from 'react';

import { Background, Container } from './styles';
import Home from '../home';

function layout() {
  return (
    <Background>
        <Container>
            <Home/>
            {/* <Menu/> */}
            {/* <Sidebar/> */}
        </Container>
    </Background>
  );
}

export default layout;