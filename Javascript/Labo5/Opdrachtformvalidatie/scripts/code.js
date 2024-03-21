const setup = () => {
  let btnValideer = document.getElementById("btnValideer");
  btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
  valideerVoornaam();
  valideerFamilienaam();
  valideerGeboortedatum();
  valideerEmail();
  valideerAantalKinderen();
  checkAlles();
};

const valideerVoornaam = () => {
  let txtVoornaam = document.querySelector("#voornaam>input");
  let voornaam = txtVoornaam.value.trim();

  if (voornaam.length > 30) {
    reportError(txtVoornaam, "max. 30 karakters");
  } else {
    clearError(txtVoornaam);
  }
};

const valideerFamilienaam = () => {
  let txtFamilienaam = document.querySelector("#familienaam>input");
  let familienaam = txtFamilienaam.value.trim();

  if (familienaam.length > 50) {
    reportError(txtFamilienaam, "max 50 karakters");
  } else if (familienaam === "") {
    reportError(txtFamilienaam, "verplicht veld");
  } else {
    clearError(txtFamilienaam);
  }
};

const valideerGeboortedatum = () => {
  let dateGeboortedatum = document.querySelector("#geboortedatum>input");
  let geboortedatum = dateGeboortedatum.value.trim();

  let datumRegex =
    /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

  if (geboortedatum === "") {
    reportError(dateGeboortedatum, "verplicht veld");
  } else if (!datumRegex.test(geboortedatum)) {
    reportError(dateGeboortedatum, "formaat is niet jjjj-mm-dd");
  } else {
    clearError(dateGeboortedatum);
  }
};

const valideerEmail = () => {
  let txtEmail = document.querySelector("#email>input");
  let email = txtEmail.value.trim();
  let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (email === "") {
    reportError(txtEmail, "verplicht veld");
  } else if (!emailRegex.test(email)) {
    reportError(txtEmail, "geen geldig email adres");
  } else {
    clearError(txtEmail);
  }
};

const valideerAantalKinderen = () => {
  let txtAantalKinderen = document.querySelector("#aantalKinderen>input");
  let aantalKinderen = txtAantalKinderen.value.trim();

  if (aantalKinderen < 0) {
    reportError(txtAantalKinderen, "is geen positief getal");
  } else if (aantalKinderen > 99) {
    reportError(txtAantalKinderen, "is te vruchtbaar");
  } else {
    clearError(txtAantalKinderen);
  }
};

const checkAlles = () => {
  let invalidElements = document.querySelectorAll(".invalid");

  if (invalidElements.length === 0) {
    alert("Proficiat!");
  }
};

const reportError = (element, message) => {
  element.className = "invalid";
  element.nextElementSibling.innerHTML = message;
};

const clearError = (element) => {
  element.className = "";
  element.nextElementSibling.innerHTML = "";
};
window.addEventListener("load", setup);
