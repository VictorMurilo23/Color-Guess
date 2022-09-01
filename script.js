const correctColor = document.querySelector('#rgb-color');
const colorsContainer = document.querySelector('#colors');
const answerText = document.querySelector('#answer');
let score = 0;

function chooseCorrectColor() {
  correctColor.innerText = `(${
    Math.floor(Math.random() * 256)
  }, ${
    Math.floor(Math.random() * 256)
  }, ${
    Math.floor(Math.random() * 256)
  })`;
}

function generateColors() {
  const colors = document.querySelectorAll('.ball');
  const randomNumber = Math.floor(Math.random() * 6);
  for (let index = 0; index < colors.length; index += 1) {
    if (index === randomNumber) {
      colors[index].style.backgroundColor = `rgb${correctColor.innerText}`;
    } else {
      colors[index].style.backgroundColor = `rgb(${
        Math.floor(Math.random() * 256)
      }, ${
        Math.floor(Math.random() * 256)
      }, ${
        Math.floor(Math.random() * 256)
      })`;
    }
  }
}

function changeScore() {
  const scoreElement = document.querySelector('#score');
  scoreElement.innerText = `Placar: ${score}`;
  localStorage.setItem('score', score);
}

function initialColorsAndScore() {
  chooseCorrectColor();
  generateColors();
  changeScore();
}

window.onload = () => {
  const savedScore = localStorage.getItem('score') || 0;
  score = savedScore;
  initialColorsAndScore();
};

function verifyAnswer(elemento) {
  return `rgb${correctColor.innerText}` === window
    .getComputedStyle(elemento)
    .getPropertyValue('background-color');
}

colorsContainer.addEventListener('click', (event) => {
  if (answerText.innerText === 'Escolha uma cor' && event.target.className === 'ball') {
    if (verifyAnswer(event.target)) {
      score += 3;
      answerText.innerText = 'Acertou!';
    } else {
      answerText.innerText = 'Errou! Tente novamente!';
    }
  }
  changeScore();
});

document.querySelector('#reset-game').addEventListener('click', () => {
  initialColorsAndScore();
  answerText.innerText = 'Escolha uma cor';
});
