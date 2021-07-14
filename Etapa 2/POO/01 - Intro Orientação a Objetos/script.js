const pessoa = { nome: 'Luca', idade: 23 }; // Declaração de um objeto

console.log(pessoa.nome);
console.log(pessoa.idade);

const quadrado = {
    base: 10,
    altura: 10,
    calcularArea: function () { return this.base * this.altura } //declaração de metodo com a função de calcular a area
};

console.log(quadrado.calcularArea());

const contato = { nome: 'Luca', telefone: '11999638507', email: 'simaque@yahoo.com.br' }
const agenda = {
    contatos: [
        { nome: 'contato1', telefone: 'telefone1', email: 'email1@teste.com' },
        { nome: 'contato2', telefone: 'telefone2', email: 'email2@teste.com' },
        { nome: 'contato3', telefone: 'telefone3', email: 'email3@teste.com' },
        { nome: 'contato4', telefone: 'telefone4', email: 'email4@teste.com' },
    ],
    adicionar: function (contato) { this.contatos.push(contato) } //metodo para adicionar um contato
}

agenda.adicionar(contato);
console.log(agenda.contatos);