import React from 'react';

class App3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nome: '', idade: '' };  // guarda todos os possiveis estados do campos
        //this.ChangeName = this.ChangeName.bind(this); // sem isso a função changeName acaba se usando como componente this
        // podemos usar a função do tipo flecha que não sobreescreve o t
    }

    //ChangeName = function (event) { // função normal que faz necessario o uso de algo para resetar o this
    ChangeName = (event) => { // função do tipo flecha que não sobrescreve o this
        this.setState({ nome: event.target.value })
    }
    ChangeIdade = (event) => { // função do tipo flecha que não sobrescreve o this
        this.setState({ idade: event.target.value })
    }

    render() {
        return (
            <>
                nome: <input type="text" value={this.state.nome} onChange={this.ChangeName} />
                <p>nome: {this.state.nome}</p>

                idade: <input type="text" value={this.state.idade} onChange={this.ChangeIdade} />
                <p>idade: {this.state.idade}</p>
            </>
        )
    };
}

export default App3;
