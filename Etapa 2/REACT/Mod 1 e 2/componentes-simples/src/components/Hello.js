import React from 'react';

//export default function Hello({children}) { retorna apenas o conteudo do tipo children
// permitindo o uso apenas de {children} ao inves de props.children
export default function Hello(props) {
    return (
        //<h1>{props.text}</h1> imprime o que estiver nos parametros dentro do h1
        //{props.children} pega o conteudo dentro do componente e usa como parametro
        <>
            {props.children}
        </>
    );
}

// fazendo utilizando função de flecha
//const Hello = (props) => (<>{props.children}</>);
//export default Hello