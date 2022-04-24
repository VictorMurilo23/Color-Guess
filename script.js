let cor = document.querySelector('#rgb-color')
let pontosAtuais = 0
function coresIniciais() {
    function corCerta() { // Vai mudar o texto da cor a ser adivinhada
        cor.innerText = '(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')'
    }
    corCerta()

    function geradorCores() { // Vai gerar as cores dos circulos
        let cores = document.querySelectorAll('.ball')
        let number = Math.floor(Math.random() * 6)
        for(let index = 0; index < cores.length; index += 1 ) {
            if (index == number) {
                cores[index].style.backgroundColor = 'rgb' + cor.innerText
            } else {
            cores[index].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')'
            }
        }
    }
    geradorCores()
}
window.onload = coresIniciais()

// Vai verificar se você clicou na cor correta
let colors = document.querySelector('#colors')
let text = document.querySelector('#answer')
colors.addEventListener('click', function (event) {
    if (text.innerText !== 'Escolha uma cor') { // Vai fazer com que você só tenha uma tentativa
    } else {
    if (event.target.className == 'ball') {
        if('rgb' + cor.innerText == window.getComputedStyle(event.target).getPropertyValue("background-color")) { 
            pontosAtuais += 3
            text.innerText = 'Acertou!'
        } else {
            text.innerText = 'Errou! Tente novamente!'
        }
    } else {
    }
    placar() // Se não tivesse isso o placar ficaria pra sempre no 0
}
})

// Botão de reiniciar o jogo
document.querySelector('#reset-game').addEventListener('click', function() {
    coresIniciais()
    text.innerText = 'Escolha uma cor'
})

// Placar
function placar() {
    let eita = document.querySelector('#score')
    eita.innerText = `Placar: ${pontosAtuais}`
}
placar() 