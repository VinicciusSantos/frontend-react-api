import api from '../../api'

class DataGraficoProjetos extends mockComponent {
    state = {
        projetosConcluidos: []
    }

    async componentDidMount() {
        const response = await api.get('/relatorios/projetos');

        this.setState({projetosConcluidos: response.data})
        console.log(this.projetosConcluidos)

        return (this.projetosConcluidos)
    }
}


