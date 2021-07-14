class Quadrado {
    constructor(lado, altura) {
        this.lado = lado;
        this.altura = altura;
        let cor = 'blue';
        this.getCor = () => { return cor; }; // função para retornar a cor do elemento privado
        this.setCor = (c) => { cor = c; } //metodo para definir a cor do elemento privado
    }
}

const quadrado = new Quadrado(10, 10);
console.log(quadrado.getCor());

quadrado.setCor('azul');
console.log(quadrado.getCor());

// o metodo não impede que a pessoa crie uma nova propriedade utilizando por exemplo
// quadrado.cor = 'vermelho' que criaria uma nova prop ao inves de mudar a existente
// para evitar isso, podemos criar um metodo de acesso
console.log('---------------------------------');

class Quadrado2 {
    constructor(lado, altura) {
        this._cor = 'blue';
        this.lado = lado;
        this.altura = altura;
    }

    // metodos get e set para fazer as operações desejadas
    get cor() { return this._cor; };
    set cor(cor) { this._cor = cor; }
}

const quadrado2 = new Quadrado2(10, 10);
console.log(quadrado2.cor);
quadrado2.cor = 'vermelho';
console.log(quadrado2.cor);


