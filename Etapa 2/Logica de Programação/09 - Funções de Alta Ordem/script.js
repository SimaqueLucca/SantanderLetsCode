//funções de alta ordem (função como parametro de outra função ave maria)

const subtrair = (a, b) => a - b;
const somar = (a, b) => a + b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;

const aplicaOperacao = (a, b, operacao) => operacao(a, b);

let resultado = aplicaOperacao(15, 10, subtrair);
console.log(resultado);

resultado = aplicaOperacao(15, 10, somar);
console.log(resultado);

resultado = aplicaOperacao(15, 10, dividir);
console.log(resultado);

resultado = aplicaOperacao(15, 10, multiplicar);
console.log(resultado);


// função retornada 

const somarX = (x) => (y) => x + y;

const somar2 = somarX(2);
const somar3 = somarX(3);

console.log(somar2(5));