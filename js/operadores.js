function parOuImpar() {
    // Obtém o valor digitado no campo de input
    let numero = document.querySelector('#numero').value;
    
    // Converte o valor para número
    let num = Number(numero);

    // Seleciona o elemento onde o resultado será exibido
    let res = document.querySelector('#teste');

    // Verifica se o número é par ou ímpar
    let teste = num % 2 === 0 ? "par" : "ímpar";

    // Exibe o resultado no elemento selecionado
    res.innerHTML = teste;
}