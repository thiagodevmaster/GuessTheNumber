var chances = 5;

function verificaSeChutePossuiUmValorValido(chute){
    const numero = +chute;
    console.log(chances)

    if(Number.isNaN(numero)){
        elementoChute.innerHTML += '<div>Valor inválido !</div>';
        return;
    }

    if(numeroForMaiorOuMenorQueValorPermitido(numero) === true){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <canvas id="my-canvas"></canvas>
            <div class="content-acertou">
                <h2 class="titulo-ganhou">Você acertou !</h2>
                <h3 class="sub-titulo-ganhou">O número secreto era ${numeroSecreto}</h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            </div>
        `;
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        
    }else if(numero < numeroSecreto && chances > 0){
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>';
        elementoChute.innerHTML += `<div>Você ainda tem ${chances} chances.</div>`;
        chances -= 1;
    }else if(numero > numeroSecreto && chances > 0){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>';
        elementoChute.innerHTML += `<div class="chances">Você ainda tem ${chances} chances.</div>`;
        chances -= 1;
    }else{
        document.body.innerHTML = `
            <h2 class="titulo-ganhou">Você perdeu !</h2>
            <h3 class="sub-titulo-ganhou">O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    }
}

function numeroForMaiorOuMenorQueValorPermitido(numero){
    if(menorValor > numero || numero > maiorValor){
        return true;
    }
}

document.body.addEventListener("click", e => {
    if(e.target.id === 'jogar-novamente'){
        window.location.reload();
    }
})