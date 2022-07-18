import React, { useState} from 'react';
import {Chart} from "react-google-charts";
import api from "../../api";

async function GetData() {
    const [state, setState] = useState(0);

    const response = await api.get('/relatorios/projetos');

    setState(response.data)
}


function GraficoProjetos() {
    const data = [
        ["Dia", "Tarefas Concluidas", "Não Concluidas"],
        ["Seg", 0, 2],
        ["Ter", 2, 3],
        ["Qua", 3.9, 4],
        ["Qui", 1.7, 1.8],
        ["Sex", 1.9, 1.7],
        ["Sab", 8.8, 1.3],
        ["Dom", 7.6, 1.2],
    ];

    

    const options = {
        curveType: "function",
        legend: {
            position: "top",
            alignment: "end",
        },
        colors: [
            "#280948", "#667EEA"
        ],
        backgroundColor: "none"
    };

    return (
            <Chart style={{transform: "scale(1.1)"}}
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}/>
    );
}

export default GraficoProjetos;
