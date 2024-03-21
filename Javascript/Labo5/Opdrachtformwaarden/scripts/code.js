const setup = () => {
  let btnSend = document.getElementById("btnSend");
  btnSend.addEventListener("click", toonResultaat);
};

const toonResultaat = () => {
  isRoker();
  getMoedertaal();
  getFavorieteBuurland();
  getBestelling();
};

const isRoker = () => {
  let isRoker = document.getElementById("isRoker");
  if (isRoker.checked == true) {
    console.log("is een roker");
  } else {
    console.log("is geen roker");
  }
};

const getMoedertaal = () => {
  let moedertaal = document.getElementsByName("moedertaal");
  for (let i = 0; i < moedertaal.length; i++) {
    if (moedertaal[i].checked) {
      console.log("moedertaal is " + moedertaal[i].value);
    }
  }
};

const getFavorieteBuurland = () => {
  let buurland = document.getElementById("buurland");
  let favorieteLand = buurland.options[buurland.selectedIndex].innerHTML;
  console.log("Favoriete buurland is " + favorieteLand);
};

const getBestelling = () => {
  let bestelling = document.getElementById("bestelling");
  let arr = [];
  let selectedBestelling = bestelling.selectedOptions;
  for (let i = 0; i < selectedBestelling.length; i++) {
    arr.push(selectedBestelling[i].value);
  }

  console.log("Bestelling bestaat uit " + arr.join(" "));
};
window.addEventListener("load", setup);
