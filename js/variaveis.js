// var, let, const 

//var tem o escopo global e de função/ retorna undefind no hoisting
var nome = 'Brenno';
console.log(nome);

//let tem o escopo de função, e retorna um erro no hoisting
let idade  = 27;
console.log(idade);

//const tem o escopo de função e nao pode ter o valor alterado, e constante
const pessoa = 'Brenno';
console.log(pessoa);


let p = document.querySelector('#teste');

p.innerHTML = 'Brenno Alencar';

console.log(p);