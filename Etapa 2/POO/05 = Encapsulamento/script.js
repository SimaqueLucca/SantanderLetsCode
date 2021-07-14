// declaração de propriedade privada em contexto de função
// metodo para encapsular o campo (cor nesse caso) e impedir o acesso e alteração dele por fora, porém o campo fica inacessivel
function Quadrado(base, altura) {
    this.base = base;
    this.altura = altura;
    let cor = 'blue'; // variavel privada, pois o let faz com que só exista dentro desse escopo
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado.cor);

//função que encapsula o campo, mas que ainda permite ter acesso a ele

function CriarQuadrado(base, altura) {
    this.base = base;
    this.altura = altura;
    let cor = 'blue'; // variavel privada, pois o let faz com que só exista dentro desse escopo

    return {
        base,
        altura,
        getCor: function () { return cor; }, //metodo para retornar o campo privado
    };
}

const quadrado2 = new CriarQuadrado(3, 4);
console.log(quadrado2.getCor());

// declaração de propriedade privada em contexto de classe
class QuadradoClasse {
    constructor(lado, altura) {
        this.lado = lado;
        this.altura = altura;
        let cor = 'blue';
        this.getCor = () => { return cor; }; //elemento continua privado, porém conseguimos ver o valor que foi definido
    }
}

const quadradoClasse = new QuadradoClasse(3, 4);
console.lado(quadrado.getCor());