const textElement = document.getElementById("text");
const phrases = ["GRUPO", "UNIÃO"];

const colors = ["color-0", "color-1", "color-2", "color-3", "color-4"];
let phraseIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex === 0) {
    textElement.classList.remove(...colors); // Remove todas as classes de cor
    textElement.classList.add(colors[phraseIndex % colors.length]); // Adiciona a nova cor
    textElement.style.opacity = 1; // Define a opacidade para visível
  }
  if (charIndex < phrases[phraseIndex].length) {
    textElement.innerHTML += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 300); // Aumentar a velocidade para uma animação mais fluida
  } else {
    setTimeout(erase, 3000); // Pausa antes de apagar
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.innerHTML = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 300); // Aumentar a velocidade para uma animação mais fluida
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    textElement.style.opacity = 0; // Define a opacidade para invisível
    setTimeout(type, 500); // Pausa antes de começar a digitar a próxima frase
  }
}

window.onload = type;
