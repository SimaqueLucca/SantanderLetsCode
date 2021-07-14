class Pessoa {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

const pessoa1 = new Pessoa('Luca', 23, 'simaque@yaho.com.br');
console.log(pessoa1);
pessoa1.idade = 24;
pessoa1.email = 'simaque@yahoo.com.br';

console.log(pessoa1);

const pessoa2 = new Pessoa('Joca', 22, 'joca@yahoo.com.br')
console.log(pessoa2);