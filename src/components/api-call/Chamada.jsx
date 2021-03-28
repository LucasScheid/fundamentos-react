import React from 'react';
import axios from 'axios';

export default class TesteChamada extends React.Component {

    componentDidMount() {

        //Enderecos
        //https://coreqa.leomadeiras.com.br/operacoes/v1/usuario/obteremail
        //https://apiqa.leomadeiras.com.br/operacoes/v1/usuario/obteremail
        //https://leoplanapidev.leomadeiras.com.br/Leoplan/Teste/operacoes/v1/usuario/obteremail

        //Solução 1
        //https://cors-anywhere.herokuapp.com/https://apiqa.leomadeiras.com.br/operacoes/v1/usuario/obteremail

        //Soluçao 2
        //start chrome --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp 

        axios({
            method: 'POST',
            url: 'https://apiqa.leomadeiras.com.br/operacoes/v1/usuario/obteremail',
            data: JSON.stringify('andrews.nascimento@leomadeiras.com.br'),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                const persons = res.data;
                console.log(persons);
            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}