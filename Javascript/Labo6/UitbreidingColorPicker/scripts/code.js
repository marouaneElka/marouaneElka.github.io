const setup = () => {
  let sliders = document.getElementsByClassName("slider");
  let btnSave = document.getElementById("btnSave");

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("change", update);
    sliders[i].addEventListener("input", update);
  }

  btnSave.addEventListener("click", () => {
    let val = sliders[0].value;
    let val2 = sliders[1].value;
    let val3 = sliders[2].value;
    createElement(val, val2, val3);
  });
};

const update = () => {
  let sliders = document.getElementsByClassName("slider");
  let swatch = document.getElementsByClassName("swatch");
  let roodVal = sliders[0].value;
  let groenVal = sliders[1].value;
  let blauwVal = sliders[2].value;
  swatch[0].style.backgroundColor = `rgb(${roodVal},${groenVal},${blauwVal})`;

  let rood = document.getElementById("red");
  let groen = document.getElementById("green");
  let blauw = document.getElementById("blue");
  rood.innerHTML = roodVal;
  groen.innerHTML = groenVal;
  blauw.innerHTML = blauwVal;
};

const createElement = (red, green, blue) => {
  let swatch = document.createElement("div");
  swatch.classList.add("swatch");
  swatch.style.background = `rgb(${red}, ${green}, ${blue})`;

  let btnClose = document.createElement("button");
  btnClose.innerText = "X";
  btnClose.addEventListener("click", (e) => {
    document.body.removeChild(swatch);
  });

  swatch.appendChild(btnClose);
  document.body.appendChild(swatch);
};
window.addEventListener("load", setup);
