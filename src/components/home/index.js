import React from 'react';
import { useLocation } from 'react-router-dom';

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

function Home() {
  let par = useLocation().pathname;
  console.log(par)
  return (
    <Container>
        <ContLogo>
            <Logo/>
        </ContLogo>

        <NavMenu>
          <a href="/projetos">
            {par === '/projetos' || par === '/'
            ? <MenuButton> 
              <ImgProjetos className='active'/>
              <span className='active'>Projetos</span>
            </MenuButton>
            : <MenuButton>
            <ImgProjetos/>
            <span>Projetos</span>
          </MenuButton>
            }
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
            <MenuButton>
              <ImgTarefas/>
              <span>Tarefas</span>
            </MenuButton>
          </a>
        </NavMenu>

    </Container>
  );
}

export default Home;