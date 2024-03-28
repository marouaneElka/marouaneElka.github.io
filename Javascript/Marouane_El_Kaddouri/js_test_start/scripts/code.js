const setup = () => {
  let kip = document.getElementById("keuzelijst");
  kip.addEventListener("change", toonImage);
  let txtLetter = document.getElementById("txtLetter");
  txtLetter.addEventListener("change", toonHoeveelLetters);
};

const toonImage = () => {
  let kip = document.getElementById("keuzelijst");
  let divImg = document.getElementById("img");
  let note = document.getElementById("note");
  let selectedKipValue = kip.options[kip.selectedIndex].value;
  if (selectedKipValue === "ei") {
    divImg.classList.remove("hidden");
    divImg.classList.add("with-egg");
    note.innerHTML = "Hierboven, een kip met een ei";
  }
  if (selectedKipValue === "geenEi") {
    divImg.className = "";
    note.innerHTML = "Hierboven, een kip zonder een ei";
  }

  if (selectedKipValue === "kies") {
    divImg.className = "hidden";
    note.innerHTML = "";
  }
};

const toonHoeveelLetters = () => {
  let note = document.getElementById("note");
  let txtLetter = document.getElementById("txtLetter");
  let hoeveel = document.getElementById("hoeveel");
  let txtVal = txtLetter.value;
  let noteVal = note.innerHTML;
  let count = 0;
  let index = noteVal.indexOf(txtVal);

  while (index !== -1) {
    count++;
    index = noteVal.indexOf(txtVal, index + 1);
  }
  hoeveel.style.fontWeight = "bold";
  hoeveel.innerHTML =
    'Letter "' + txtVal + '" komt ' + count + " keer voor in bovenstaande zin.";
};
window.addEventListener("load", setup);
