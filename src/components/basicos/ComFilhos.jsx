import React from 'react'

let comfilhos = props => (
    <div>
        <h2>Os filhos:</h2>
        <div>
            {props.children}
        </div>
    </div>
);

export default comfilhos;
