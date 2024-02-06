let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibiTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibiMensagemInicial() {
    exibiTextoNaTela('h1', 'Jogo do número secreto');
    exibiTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibiMensagemInicial();

function verificaChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibiTextoNaTela('h1', 'Você acertou!!!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibiTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibiTextoNaTela('p', 'O número secreto é menor')
        } else {
            exibiTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limpaCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//Finalizar o metodo de reiniciar o jogo
function reiniciaJogo() {

}