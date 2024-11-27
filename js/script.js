document.body.style.backgroundColor = "#f0f8ff";

const nav = document.querySelector(".nav");
nav.style.backgroundColor = "#333";
nav.style.color = "white";

const main = document.querySelector("main");
main.style.backgroundColor = "#fff8dc";
main.style.padding = "20px";

const footer = document.querySelector("footer");
footer.style.backgroundColor = "#333";
footer.style.color = "white";
footer.style.padding = "10px";
footer.style.textAlign = "center";

const increaseButton = document.querySelector(".increaseClick");
const decreaseButton = document.querySelector(".decreaseClick");
const clickCount = document.querySelector(".clickCount");

let count = 0;

increaseButton.addEventListener("click", () => {
  count++;
  clickCount.textContent = count;
});

decreaseButton.addEventListener("click", () => {
  count--;
  clickCount.textContent = count;
});
