import React from 'react';


function Semana(props) {
    return (
        <div>
            <Dia dia={props.diaInical} />
            <Dia dia={props.diaInical + 1} />
            <Dia dia={props.diaInical + 2} />
            <Dia dia={props.diaInical + 3} />
            <Dia dia={props.diaInical + 4} />
            <Dia dia={props.diaInical + 5} />
            <Dia dia={props.diaInical + 6} />
        </div>
    )
}

class Dia extends React.Component {
    state = { foiClicado: '0' };

    constructor() {
        super();
        this.handlenOnClick = this.handlenOnClick.bind(this);

    }
    handlenOnClick(event) {
        console.log("Dia " + this.props.dia + " Foi clicado: " + this.state.foiClicado + " vezes.");
        if (this.state.foiClicado === '0') {
            this.setState({ foiClicado: '1' });
        }
    }

    render() {
        return (
            <button className="dia" onClick={this.handlenOnClick}>{

                (this.props.dia > 0 && this.props.dia < 32) ?
                    this.props.dia :
                    '.'

            }
            </button>
        );
    }
}

function Calendario(props) {
    return (
        <div>
            <div>{props.mes} / {props.ano}</div>
            <button className="dia">D</button>
            <button className="dia">S</button>
            <button className="dia">T</button>
            <button className="dia">Q</button>
            <button className="dia">Q</button>
            <button className="dia">S</button>
            <button className="dia">S</button>
            <Semana diaInical={-3} />
            <Semana diaInical={4} />
            <Semana diaInical={11} />
            <Semana diaInical={18} />
            <Semana diaInical={25} />
            <Semana diaInical={32} />
        </div>
    )
}
function Agenda(props) {
    return (
        <div>
            <Calendario mes={props.mes} ano={props.ano} />
        </div>
    )
}

const About = props => {
    return (
        <div>
            <Agenda mes={props.mes} ano={props.ano} />
        </div>
    );
};


export default About;