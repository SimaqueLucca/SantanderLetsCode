import React from 'react';

class App4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nome: undefined, txtNome: '' };
    }

    ChangetxtName = (event) => {
        this.setState({ txtNome: event.target.value });
    }

    pesistName = () => {
        this.setState({ nome: this.state.txtNome });
    }

    render() {

        const renderForm = () => {
            return (
                <>
                    nome: <input type="text" value={this.state.nome} onChange={this.ChangetxtName} />
                    <button onClick={this.pesistName}> Salvar</button>
                </>
            )
        }

        const renderText = () => {
            return (
                <>
                    <p>nome: {this.state.nome}</p>
                </>
            )
        }

        return !this.state.nome ? renderForm() : renderText();
        // ? operador tenario decide qual das funções retorna de acordo com o resultado do boolean !this.state.nome
    };
}

export default App4;
