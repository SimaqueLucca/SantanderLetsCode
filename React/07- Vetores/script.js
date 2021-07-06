// assim como as variaveis, os vetores possuem valores dinamicos, podendo ter varios tipos de variaveis dentro deles

let vetor = [10, 20, 30, 40, 50];
vetor[2] = 60;
vetor[3] = '30';
vetor[4] = 'abacaxi';
console.log(vetor[4]);

// em javascript o vetor possue tamanho dinamico, então podemos adicionar itens dentro dele (utilizando vetor.push()) após a inicialização

let vetor2 = [];
for (let i = 0; i < 10; i++) {
    vetor2.push(i);
}
console.log(vetor2)

// utilizando o for para percorrer todo o vetor

let vetor3 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

for (let i = 0; i <= vetor3.length; i++) {
    console.log(array[i]);
}

// for of a variavel assume o valor do indice, sem precisarmos trabalhar diretamente com os indices

for (let numero of vetor3) {
    console.log(numero);
}

// for in a variavel não assume os valores do vetor, apenas o indice

for (let indice in vetor3) {
    console.log(vetor3[indice]);
}

// matriz (linhas e colunas)

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

// percorrendo a matriz

for (let linha of matriz) {
    for (let elemento of linha) {
        console.log(elemento);
    }
}