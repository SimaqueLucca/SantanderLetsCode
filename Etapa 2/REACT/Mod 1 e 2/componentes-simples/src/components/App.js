import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          paragrafo jsx permite usar html junto com javascript
        </p>
        <p>
          tudo precisa estar dentro de um unico elemento, nesse caso a div
          <br></br>
          que está em volta dos dois paragrafos
        </p>
        <p>
          usando javascript detro do componente <br></br>
          {new Date().toLocaleDateString('pt-br')}
        </p>
      </div>
    )
  };
}

export default App;
