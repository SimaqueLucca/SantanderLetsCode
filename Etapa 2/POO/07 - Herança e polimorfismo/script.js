class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

//extends deixa claro que a classe (Cidadão) herda as propriedades de outra classe (Pessoa)
//super() se refere a classe superior/ classe pai (nesse caso Pessoa)
class Cidadao extends Pessoa {
    constructor(nome, idade, rg, cpf) {
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao('Luca', 23, 123123, 321321);
console.log(cidadao);


