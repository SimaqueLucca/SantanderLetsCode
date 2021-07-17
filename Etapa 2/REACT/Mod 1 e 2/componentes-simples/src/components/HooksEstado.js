import React, { useState } from 'react';

export default function HooksEstado() {
    //const [nome, setNome] = useState('Luca');
    //const onClick = () => setNome('João Kleber')

    //const [pessoa, setPessoa] = useState({ nome: 'Luca', idade: 23 });
    //const onClick = () => { setPessoa({ nome: 'João Kleber' }); console.log(pessoa); };
    //return (<h1 onClick={onClick}>{pessoa.nome}</h1>);

    // ao passar um novo valor sem passar o objeto inteiro (sem a idade nesse caso) acabamos perdendo a informação
    // pois foi sobrescrita


    const [nome, setNome] = useState('');

    // função do onChange programada como função de flecha
    return (
        <>
            nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
            <br />
            Olá, {nome}
        </>
    );
}
