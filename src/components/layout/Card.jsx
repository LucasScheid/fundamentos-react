import React from 'react'
import './Card.css'

let card = props => (
    <div className="Card">
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer">
            {props.titulo}
        </div>
    </div>
);
export default card;