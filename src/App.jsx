import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Chamada from './components/api-call/Chamada'
import Card from './components/layout/Card'

let app = props => (
    <div className="App">

        {/* <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>

        <Card titulo="#02 - Componente Com Parametro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o Subtitulo" />
        </Card>

        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#04 - Componente Com Repetição">
            <Repeticao />
        </Card>

        <Card titulo="#05 - Condicional v1">
            <Condicional numero={2} />
        </Card>

        <Card titulo="#06 - CondicionalComIf v2">
            <CondicionalComIf numero={24} />
        </Card> */}

        <Chamada />

    </div>
);

export default app;