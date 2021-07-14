//var a = 10;
let a = 10;
//var b = 13.5;
let b = 13.5;
//var c = "Luca";
let c = "Luca";
//var d = true;
let d = true;

d = 21;

// criar a variavel com var faz com que a informação escape do escopo
// let faz com que fique apenas no escopo declarado


//function
var a = function () { };
var b = () => { };

//object
var c = {};
var d = []; //array
var e = null;

// uma variavel declarada e não inicializada tem o tipo 'indefinido'
//let e;
let e = null; // forma de definir que a variavel não guarda nenhum tipo de informação
console.log(e);


//Undefined
var f;
var g = undefined;

const pi = 3.14; // const faz com o que valor não possa ser alterado durante a execução (gera erro), devido a ser uma constante