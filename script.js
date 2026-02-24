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




const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


// About Me Section Typing Effect
const aboutText = "Growing as a Full Stack Developer 🚀";
let aboutIndex = 0;

function aboutTypeEffect() {
    const typingElement = document.getElementById("typing-text");
    if (typingElement && aboutIndex < aboutText.length) {
        typingElement.innerHTML += aboutText.charAt(aboutIndex);
        aboutIndex++;
        setTimeout(aboutTypeEffect, 100);
    }
}

// Ensure both start correctly
window.addEventListener("load", () => {
    typeEffect();      // Hero typing effect
    aboutTypeEffect(); // About typing effect
});


// Smooth Scroll for Contact Button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const skillsSection = document.querySelector("#skills");

const observerSkills = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".progress-bar").forEach(bar => {
        bar.style.width = bar.classList.contains("html") ? "90%" :
                          bar.classList.contains("css") ? "85%" :
                          bar.classList.contains("js") ? "75%" :
                          bar.classList.contains("bootstrap") ? "80%" :
                          bar.classList.contains("firebase") ? "70%" :
                          bar.classList.contains("git") ? "75%" : "0%";
      });
    }
  });
}, { threshold: 0.5 });

observerSkills.observe(skillsSection);

const projectCards = document.querySelectorAll(".project-card");

const observerProjects = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

projectCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 1s ease";
  observerProjects.observe(card);
});