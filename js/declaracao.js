//Declaração de variaveis 
let nome = "Brenno";

console.log(nome);

const idade = 27;

var email = true;



// declaração de funçoes
function dizerNome() {
    const nomeLove = "jj";

    alert(nomeLove);
}

const teste = () => alert('Olá, Mundo!');


const somarValores = (valor1, valor2) => {
    return valor1 + valor2
}  



//Declaracão de Array 
let numeros = [1, 2, 3, 4, 5,];

console.log(numeros);

//Declaração de objeto
let carro = {
    modelo: 'Uno',
    ano: 2000,
    cor: 'Vermelho'
}

// Declaração de Class
class pessoa {
    constructor(valor1, valor2, valor3) {
        this.nome = valor1;
        this.idade = valor2;
        this.sexo = valor3;
    }
}

const brenno = new pessoa("Brenno", 27, "Masculino");

console.log(brenno)