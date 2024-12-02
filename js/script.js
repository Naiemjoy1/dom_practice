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

function countRabbits() {
  for (let i = 1; i <= 3; i++) {
    alert("Rabbit number " + i);
  }
}

const countRabbitsButton = document.getElementById("count_rabbit");

countRabbitsButton.addEventListener("click", () => {
  alert("button click by id");
});

class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  save() {
    alert("saving");
  }

  load() {
    alert("loading");
  }

  search() {
    alert("searching");
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}

new Menu(menu);

document.addEventListener("click", function (event) {
  if (event.target.dataset.counter != undefined) {
    event.target.value++;
  }
});

document.addEventListener("click", function (event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;

  let elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
});

let event = new Event("click");
elem.dispatchEvent(event);

menu.onclick = function () {
  alert(1);

  menu.dispatchEvent(
    new CustomEvent("menu-open", {
      bubbles: true,
    })
  );

  alert(2);
};

document.addEventListener("menu-open", () => alert("nested"));
