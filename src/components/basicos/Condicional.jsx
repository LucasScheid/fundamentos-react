import React from 'react'

let condicional = props => {

    return (
        <div>
            <h2>O número é {props.numero}</h2>
            {props.numero % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )

}

export default condicional;