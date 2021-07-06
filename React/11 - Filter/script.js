const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = vetor.filter(x => x % 2 == 0);
console.log(pares);

const impares = vetor.filter(function (x) { return x % 2 != 0 });
console.log(impares);

const vetor3 = [10, 4, 5, 6, 2, 7, 3, 8, 9, 1];
console.log(vetor3);

const vetor4 = vetor3.filter(x => x < 8);
console.log(vetor4);