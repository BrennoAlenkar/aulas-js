function mudarCorFundo() {
    document.body.style.background = 'gray';
}

mudarCorFundo();

function cotacaoDolar(valorReal, dolar) {
    return valorReal * dolar;
}

document.querySelector('#teste').innerHTML = cotacaoDolar(50, 5.53)

//console.log(nome);

//console.log(idade);

//console.log(pessoa);


//dizerNome();
//mostrarAlencar()

var nome = "Brenno";

let idade = 27;

const pessoa = "Eu mesmo";


function dizerNome() {
    console.log("Brenno");
}

const mostrarAlerta = () => alert('Olá, Mundo');
