//  função map tira a necessidade de um for para trabalhar com o vetor

const vetor = ["10", "20", "30"];
const stringToInt = (x) => parseInt(x); // convertendo o texto para inteiro
const vetor2 = vetor.map(stringToInt); // convertendo todo o vetor para inteiro e salvando dentro de outro
console.log(vetor); // string
console.log(vetor2); // int

const vetor3 = vetor2.map(x => x * x) // elevando valores ao quadrado
console.log(vetor3);