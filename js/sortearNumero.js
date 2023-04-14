const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = geraNumeroAleatorio(maiorValor);
const elementoMenorValor = document.querySelector("#menor-valor");
const elementoMaiorValor = document.querySelector("#maior-valor");

elementoMaiorValor.innerHTML = maiorValor;
elementoMenorValor.innerHTML = menorValor;

console.log("O número secreto é: " + numeroSecreto);

function geraNumeroAleatorio(expoente){
    return parseInt(Math.random() * expoente + 1);
}



