//Definere variabler for classes: .prev .next .box
// Slider variabler
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const box = document.querySelector(".box");

// Slider javascript
// Definere "degrees som nul"

let degrees = 0;

//Øger degrees med 45 grader, som får slideren til at gå til venstre

prev.addEventListener("click", function () {
  degrees += 45;
  box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
});

//trækker 45 grader fra, som får slideren til at gå til højre

next.addEventListener("click", function () {
  degrees -= 45;
  box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
});
