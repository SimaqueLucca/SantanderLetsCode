import React from 'react';

class Lista extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: ["item1", "item2", "item3", "item4"]
        }
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.items.map((item, indice) => <li key={indice}>{item}</li>)}
                </ul>
            </>// sem o indice o console do navegador nos retorna um erro, pois cada elemento precisa ter um index
        );
    }
}

export default Lista; //não esquecer dessa parte