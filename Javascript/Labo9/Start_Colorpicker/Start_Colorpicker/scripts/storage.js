const storeSliderValues = () => {
  let settings = {};
  let settingsJSON;
  settings.red = parseInt(document.getElementById("sldRed").value);
  settings.green = parseInt(document.getElementById("sldGreen").value);
  settings.blue = parseInt(document.getElementById("sldBlue").value);
  settingsJSON = JSON.stringify(settings);
  localStorage.setItem("VIVES.be.settingsPerson", settingsJSON);
};

const restoreSliderValues = () => {
  let settings;
  let settingsJSON = localStorage.getItem("VIVES.be.settingsPerson");
  if (settingsJSON == undefined) {
    settings = {
      red: 0,
      green: 0,
      blue: 0,
    };
  } else {
    settings = JSON.parse(settingsJSON);
  }

  document.getElementById("sldRed").value = settings.red;
  document.getElementById("sldGreen").value = settings.green;
  document.getElementById("sldBlue").value = settings.blue;
};

const storeSwatches = () => {
  // bouw een array met kleurinfo objecten
  let rgbColors = [];
  let opslaan;

  let swatches = document.getElementsByClassName("swatch");
  for (let i = 1; i < swatches.length; i++) {
    let rgb = {
      red: swatches[i].getAttribute("data-red"),
      green: swatches[i].getAttribute("data-green"),
      blue: swatches[i].getAttribute("data-blue"),
    };
    rgbColors.push(rgb);
  }

  opslaan = JSON.stringify(rgbColors);
  localStorage.setItem("MB", opslaan);
};

const restoreSwatches = () => {
  let settings;
  let opslaan = localStorage.getItem("MB");

  if (opslaan == undefined) {
    settings = [
      {
        red: 0,
        green: 0,
        blue: 0,
      },
    ];
  } else {
    settings = JSON.parse(opslaan);
  }
  for (let i = 0; i < settings.length; i++) {
    let red = settings[i].red;
    let green = settings[i].green;
    let blue = settings[i].blue;
    addSwatchComponent(red, green, blue);
  }
};
