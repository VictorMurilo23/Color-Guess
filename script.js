window.onload = function () {
    let cores = document.querySelectorAll('.ball')
    for(let index = 0; index < cores.length; index += 1 ) {
        cores[index].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')'
    }
}