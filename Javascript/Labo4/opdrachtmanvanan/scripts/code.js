const setup = () => {
  let zin = "De man van An geeft geen hand aan ambetante verwanten";
  let count = 0;
  let index = zin.indexOf("an");

  while (index !== -1) {
    count++;
    index = zin.indexOf("an", index + 1);
  }
  console.log(count);

  count = 0;
  index = zin.lastIndexOf("an");
  while (index !== -1) {
    count++;
    index = zin.lastIndexOf("an", index - 1);
  }
  console.log(count);
};
window.addEventListener("load", setup);
