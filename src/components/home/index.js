import React from 'react';

import { 
  Container,
  ContLogo,
  Logo,
  NavMenu,
  MenuButton,
  ImgTarefas,
  ImgProjetos,
  ImgEquipes,
  ImgPessoas,
} from './styles';

function home() {
  return (
    <Container>
        <ContLogo>
            <Logo/>
        </ContLogo>

        <NavMenu>
          <a href="/projetos">
            <MenuButton>
              <ImgProjetos/>
              <span>Projetos</span>
            </MenuButton>
          </a>
          <a href="/equipes">
            <MenuButton>
              <ImgEquipes/>
              <span>Equipes</span>
            </MenuButton>
          </a>
          <a href="/pessoas">
            <MenuButton>
              <ImgPessoas/>
              <span>Pessoas</span>
            </MenuButton>
          </a>
          <a href="/tarefas">
            <MenuButton className='active'>
              <ImgTarefas/>
              <span>Tarefas</span>
            </MenuButton>
          </a>
        </NavMenu>

    </Container>
  );
}

export default home;