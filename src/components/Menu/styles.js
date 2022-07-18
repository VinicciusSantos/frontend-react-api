import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  border: 2px solid black;
  height: calc(100% - 48px);
  overflow: hidden;
`;

export const Header = styled.div`
    padding: 20px 20px 0px;

    h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        color: var(--roxo);
    }
`;


export const Grafico = styled.div`
    width: 100%;
`;

export const TopoGrafico = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
`;

export const Legenda = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    span {
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        flex-wrap: nowrap;
    }
`;
export const Filtros = styled.div``;
