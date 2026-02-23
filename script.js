const textArray = ["Frontend Developer 💻", "Creative Coder ✨", "Problem Solver 🚀"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (index >= textArray.length) index = 0;
    currentText = textArray[index];

    if (!isDeleting) {
        typingElement.innerHTML = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.innerHTML = currentText.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            index++;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
