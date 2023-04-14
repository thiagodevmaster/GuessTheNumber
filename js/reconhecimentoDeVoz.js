const elementoChute = document.querySelector("#chute");
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => recognition.start());

function onSpeak(result){
    const chute = result.results[0][0]["transcript"];
    exibeChuteNaTela(chute);
    verificaSeChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>
        Você disse <span class="box">${chute}</span>
    </div>
    `;
}


