import React from 'react';

class App5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nome: undefined, txtNome: '' };
    }

    ChangetxtName = (event) => {
        this.setState({ txtNome: event.target.value });
    }

    //componentdidmount verifica se o navegador terminou de montar todos os componentes
    componentDidMount = () => {
        const nome = sessionStorage.getItem('nome');
        if (nome) this.setState({ nome }); //se if não tiver sido inicialado ele será undefined e o IF entererá como FALSE
    }

    persistName = () => {
        this.setState({ nome: this.state.txtNome });
        sessionStorage.setItem('nome', this.state.txtNome); //salvar informação no cache do navegador
    }

    render() {

        const renderForm = () => {
            return (
                <>
                    nome: <input type="text" onChange={this.ChangetxtName} />
                    <button onClick={this.persistName}> Salvar</button>
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

    };
}

// NÃO ESQUECER DE MUDAR O ARQUIVO QUE SERÁ CARREGADO NA INDEX

export default App5;
