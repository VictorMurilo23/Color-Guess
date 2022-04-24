let cor = document.querySelector('#rgb-color')
window.onload = function () {
    function corCerta() { // Vai mudar o texto da cor a ser adivinhada
        cor.innerText = '(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')'
    }
    corCerta()
    
    function geradorCores() { // Vai gerar as cores dos circulos
        let cores = document.querySelectorAll('.ball')
        for(let index = 0; index < cores.length; index += 1 ) {
            cores[index].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')'
            if (index == 5) {
                cores[index].style.backgroundColor = 'rgb' + cor.innerText
            }
        }
    }
    geradorCores()
}

// Vai verificar se você clicou na cor correta
let colors = document.querySelector('#colors')
colors.addEventListener('click', function eita(event) {
    if (event.target.className == 'ball') {
        cor = 'rgb' + cor.innerText
        if(cor == window.getComputedStyle(event.target).getPropertyValue("background-color")) { //Depois de clicar uma vez na circulo com a cor certa, o innertext do cor virá undefined
            document.querySelector('#answer').innerText = 'Acertou!'
        } else {
            document.querySelector('#answer').innerText = 'Errou! Tente novamente!'
        }
    } else {
    }
})
