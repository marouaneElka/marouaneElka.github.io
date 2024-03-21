const setup = () => {
  voegGemeentesToe();
};

const voegGemeentesToe = () => {
  let voegToe = document.getElementById("gemeentes");
  let arr = [];
  let gemeente;
  while (gemeente !== "stop") {
    gemeente = window.prompt("Vul een gemeente in");
    if (gemeente !== "stop") {
      arr.push(gemeente);
    }
  }
  arr.sort();
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    voegToe.innerHTML += "<option>" + arr[i] + "</option>";
  }
};
window.addEventListener("load", setup);
