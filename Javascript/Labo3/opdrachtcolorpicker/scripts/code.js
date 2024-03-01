const setup = () => {
  let swatch = document.getElementsByClassName("swatch");
  let sliders = document.getElementsByClassName("slider");

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("change", update);
    sliders[i].addEventListener("input", update);
  }
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
window.addEventListener("load", setup);
