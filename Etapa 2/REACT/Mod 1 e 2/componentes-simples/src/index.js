import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import Lista from './components/Lista';
import Lista2 from './components/Lista2';
import { Lista3, Item } from './components/Lista3';
import Formulario from './components/Formulario';
import Hello from './components/Hello';
import HooksEstado from './components/HooksEstado';
import HooksEfeitos from './components/HooksEfeitos';

import reportWebVitals from './reportWebVitals';

// React.StrictMode utilizada para informar o elemento que será renderizado na tela, necessario fazer o import antes
// utlizado tambem para passar como argumento as informações que serão exibidas e utilizadas no componente

//<hello text="texto as ser passado como parametro">
ReactDOM.render(
  <React.StrictMode>
    <HooksEfeitos text="salve">
      <h1>Alo alo rapazeada</h1>
    </HooksEfeitos>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
