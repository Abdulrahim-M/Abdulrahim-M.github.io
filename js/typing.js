const headerText = document.querySelector("#typing");

const phrases = [
  " Backend Software Developer ",
  " API Architect ",
  " Automation Enthusiast ",
  " I build APIs with Java & Spring Boot ",
  " I believe good code is self-documenting ",
  " I love clean architecture ",
  " Dependency Injection is my love language ",
  " I respect well-named variables ",
  " Backend is where the magic happens ",
  " I don't trust code that works on the first try ",
  " I make services talk ... reliably ",
  " I write tests like I mean it ",
  " I push code, I drink coffee, I repeat ",
  " Kafka doesn’t scare me, Much ",
  " Give me a JVM and a problem "
];

let i = 0;
let j = 0;
let isDeleting = false;
let currentPhrase = '';
let typeSpeed = 50;

function typeLoop() {
  const fullPhrase = phrases[i];

  if (!isDeleting) {
    currentPhrase = fullPhrase.slice(0, j++);
  } else {
    currentPhrase = fullPhrase.slice(0, j--);
  }

  headerText.textContent = currentPhrase;

  if (!isDeleting && j === fullPhrase.length) {
    isDeleting = true;
    typeSpeed = 500;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    typeSpeed = 250;
  } else {
    typeSpeed = isDeleting ? 30 : 60;
  }

  setTimeout(typeLoop, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeLoop);
