let personen = [];

const toonGebruikerData = () => {
  let lstPersonen = document.getElementById("lstPersonen");
  let user = personen[lstPersonen.selectedIndex];

  let voornaam = document.getElementById("txtVoornaam");
  voornaam.value = user.voornaam;

  let naam = document.getElementById("txtFamilienaam");
  naam.value = user.naam;

  let geboortedatum = document.getElementById("txtGeboorteDatum");
  geboortedatum.value = user.geboortedatum;

  let email = document.getElementById("txtEmail");
  email.value = user.email;

  let aantalKinderen = document.getElementById("txtAantalKinderen");
  aantalKinderen.value = user.aantalKinderen;
};

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
  console.log("Klik op de knop bewaar");

  // valideer alle input data en controleer of er geen errors meer zijn
  valideer();

  // indien ok, bewaar de ingegeven data.
  // een nieuw aangemaakte persoon voegen we toe
  // een bestaande persoon in de lijst passen we aan

  // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
  let person = {
    voornaam: document.getElementById("txtVoornaam").value,
    naam: document.getElementById("txtFamilienaam").value,
    geboortedatum: document.getElementById("txtGeboorteDatum").value,
    email: document.getElementById("txtEmail").value,
    aantalKinderen: document.getElementById("txtAantalKinderen").value,
  };

  let list = document.getElementById("lstPersonen");
  if (list.selectedIndex != -1) {
    personen[list.selectedIndex] = person;
    update(true, person);
  } else {
    personen.push(person);
    update(false, person);
  }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
  console.log("Klik op de knop nieuw");

  // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
  let form = document.getElementsByTagName("form")[0];
  form.reset();
  clearAllErrors();
};

const update = (bestaat, person) => {
  let list = document.getElementById("lstPersonen");
  let uName = person.voornaam + " " + person.naam;
  if (!bestaat) {
    let newOption = document.createElement("option");
    newOption.text = uName;
    newOption.value = uName;

    list.add(newOption);
  } else {
    let option = list.options[list.selectedIndex];
    option.value = uName;
    option.text = uName;
  }
};

// onze setup functie die de event listeners registreert
const setup = () => {
  let btnBewaar = document.getElementById("btnBewaar");
  btnBewaar.addEventListener("click", bewaarBewerktePersoon);

  let btnNieuw = document.getElementById("btnNieuw");
  btnNieuw.addEventListener("click", bewerkNieuwePersoon);

  let lstPersonen = document.getElementById("lstPersonen");
  lstPersonen.addEventListener("change", toonGebruikerData);
  // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
  // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);
