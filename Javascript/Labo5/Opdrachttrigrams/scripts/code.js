const setup = () => {
  let btnToon = document.getElementById("btnToon");
  btnToon.addEventListener("click", toonTrigrams);
};

const trigram = () => {
  let woord = document.getElementById("txtTekst").value;
  let toon = document.getElementById("lstTrigrams");
  let index = 0;
  let index2 = 3;

  for (let i = 0; i < woord.length; i++) {
    if (woord.slice(index, index2).length === 3) {
      toon.innerHTML += woord.slice(index, index2) + "<br>";
      index++;
      index2++;
    }
  }
};

const toonTrigrams = () => {
  let txtTekst = document.getElementById("txtTekst");
  let tekst = txtTekst.value;
  let lstTrigrams = document.getElementById("lstTrigrams");
  let trigrams = getTrigrams(tekst);
  let output = "";
  for (let i = 0; i < trigrams.length; i++) {
    output += "<li>" + trigrams[i] + "</li>";
  }
  lstTrigrams.innerHTML = output;
};

const getTrigrams = (tekst) => {
  let result = [];
  let trigram;
  for (let i = 0; i <= tekst.length - 3; i++) {
    trigram = tekst.slice(i, i + 3);
    result.push(trigram);
  }
  return result;
};
window.addEventListener("load", setup);
