const words = ["innowacja", "jakość", "technologia", "świeżość"];
const typingElement = document.getElementById("typing");

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingElement.textContent = currentWord.substring(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1600);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 350);
      return;
    }
  }

  setTimeout(typeEffect, deleting ? 55 : 95);
}

typeEffect();

const cursorGlow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (event) => {
  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";
});
