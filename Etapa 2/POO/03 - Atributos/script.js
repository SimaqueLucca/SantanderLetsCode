class Quadrado {
    constructor(base, altura) {
        if (isNaN(base) || isNaN(altura)) {
            throw "Os argumentos devem ser númericos"
        }
        this.base = base;
        this.altura = altura;
        this.cor = undefined; // argumento opcional, não possue valor na construção, mas pode ser definido depois
    }
    calcularArea() { return this.base * this.altura }
}


const quadrado = new Quadrado(10, 10);
console.log(quadrado);
console.log(quadrado.calcularArea());
quadrado.cor = 'azul';
console.log(quadrado.cor);