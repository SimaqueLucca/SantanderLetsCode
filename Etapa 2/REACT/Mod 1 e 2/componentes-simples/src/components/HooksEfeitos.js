import React, { useState, useEffect } from 'react';

export default function HooksEstado() {

    const [nome, setNome] = useState(undefined);

    useEffect(
        () => {
            if (nome === undefined) {
                setNome(sessionStorage.getItem('nome') || '');
            }
            else {
                sessionStorage.setItem('nome', nome);
            }
        }, [nome]
    )

    return (
        <>
            nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
            <br />
            Olá, {nome}
        </>
    );
}
