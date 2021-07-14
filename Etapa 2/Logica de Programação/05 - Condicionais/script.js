let estaSol = true;

if (estaSol) {
    console.log('vou para a praia');
}

else {
    console.log('vou para o campo');
}

let numero = 1;

if (numero > 0) {
    console.log('numero positivo');
}

else if (numero == 0) {
    console.log('o numero é zero');
}

else {
    console.log('numero negativo');
}

//---------------------------------------------------------------------

numero = 4;

let paridade = numero % 2 == 0 ? 'par' : 'impar';
console.log(paridade);

//---------------------------------------------------------------------

let sinal = 'vermelho';

switch (sinal) {
    case 'verde':
        console.log('pode passar');
        break;
    case 'amarelo':
        console.log('cuidado, farol fechando');
        break;
    case 'vermelho':
        console.log("fechado, não passe");
        break;
    default:
        console.log('valor invalido');
        break;
}

//---------------------------------------------------------------------

let hoje = new Date().getDay();
let dia;

switch (hoje) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Segunda";
        break;
    case 2:
        dia = "Terça";
        break;
    case 3:
        dia = "Quarta";
        break;
    case 4:
        dia = "Quinta";
        break;
    case 5:
        dia = "Sexta";
        break;
    case 6:
        dia = "Sábado";
}