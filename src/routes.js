import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Projetos from './pages/Projetos'
import Equipes from './pages/Equipes'
import Pessoas from './pages/Pessoas'
import Tarefas from './pages/Tarefas'

function Rout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Projetos/>} />
                <Route exact path="/projetos" element={<Projetos/>} />
                <Route exact path="/equipes" element={<Equipes/>} />
                <Route exact path="/pessoas" element={<Pessoas/>} />
                <Route exact path="/tarefas" element={<Tarefas/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;