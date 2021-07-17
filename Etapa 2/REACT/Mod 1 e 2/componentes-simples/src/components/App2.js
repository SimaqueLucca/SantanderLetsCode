import React from 'react';

class App2 extends React.Component {
    constructor(props) {
        super(props);
    }
    //construtor utilizado para receber os parametros da classe pai
    // props.children exibe todos os elemtos que estão dentro do componente (app2 no caso)

    render() {
        return (
            <div className="box">
                <div id="title">{this.props.title}</div>
                <div id="text">{this.props.children}</div>

            </div>
        )
    };
}

export default App2;
