import React from 'react';
import ReactDOM from 'react-dom';


class Time extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTime: 0
        }
    }

    tick() {
        this.setState((prevState, props) => ({
            currentTime: prevState.currentTime + 1
        }))
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    render() {
        return (
            <div>
                <h1>O tempo que passou desde que entrou nessa tela foi: {this.state.currentTime}.</h1>
            </div>
        );
    };

};

ReactDOM.render(
    <Time />,
    document.getElementById('root')
);

const Marcador = () => {
    return (
        <div>
            <Time />
            <br />
        </div>
    );
};

export default Marcador;