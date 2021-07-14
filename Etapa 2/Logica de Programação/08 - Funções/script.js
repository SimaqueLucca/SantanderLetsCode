function escreva() {
    console.log('vamo que vamo');
}

escreva();

function escreva2(texto) {
    console.log(texto);
}

escreva2('lets que lets');
escreva2('vamo que lets');

function somar(a, b) {
    return a + b;
}
console.log(somar(10, 11));

const somar2 = function (a, b) { return a + b; } // função anonima - não possue nome
console.log(somar2(20, 10));

const somar3 = (a, b) => a + b; // função de flecha
console.log(somar3(20, 30));