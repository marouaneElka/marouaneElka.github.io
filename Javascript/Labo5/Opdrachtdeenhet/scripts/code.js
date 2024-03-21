const setup = () => {
  let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
  let output = vervangAlles(zin, "de", "het");
  console.log(output);
};

const zoekDe = () => {
  let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
  let index = zin.indexOf("de");

  while (index !== -1) {
    zin = zin.slice(0, index) + "het" + zin.slice(index + 2);
    index = zin.indexOf("de", index + 2);
  }
  console.log(zin);
};

const vervangAlles = (bronTekst, oud, nieuw) => {
  let result = bronTekst;
  let index = result.indexOf(oud);
  while (index !== -1) {
    result = result.slice(0, index) + nieuw + result.slice(index + oud.length);
    index = result.indexOf(oud, index + oud.length);
  }
  return result;
};
window.addEventListener("load", setup);
