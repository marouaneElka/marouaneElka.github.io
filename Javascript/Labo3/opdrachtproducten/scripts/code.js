const setup = () => {
  let btnHerbereken = document.getElementById("btnHerbereken");
  btnHerbereken.addEventListener("click", bereken);
};

const bereken = () => {
  let prijs = document.getElementsByClassName("prijs");
  let aantal = document.getElementsByClassName("aantal");
  let btw = document.getElementsByClassName("btw");
  let subtotaal = document.getElementsByClassName("subtotaal");
  let totaal = 0;

  for (let i = 0; i < prijs.length; i++) {
    let prijsVal = parseFloat(prijs[i].innerHTML);
    let aantalVal = aantal[i].value;
    let btwVal = parseFloat(btw[i].innerHTML);
    let berekening =
      prijsVal * aantalVal + (prijsVal * aantalVal * btwVal) / 100;
    subtotaal[i].innerHTML = berekening.toFixed(2) + " Eur";
    totaal += berekening;
  }

  let totaalVal = document.getElementById("txtTotaal");
  totaalVal.innerHTML = totaal.toFixed(2) + " Eur";
};
window.addEventListener("load", setup);
