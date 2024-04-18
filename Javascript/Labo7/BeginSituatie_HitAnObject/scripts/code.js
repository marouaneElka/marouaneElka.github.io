let global = {
  IMAGE_COUNT: 5, // aantal figuren
  IMAGE_SIZE: 48, // grootte van de figuur
  IMAGE_PATH_PREFIX: "images/", // map van de figuren
  IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
  MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
  score: 0, // aantal hits
  timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
  let start = document.getElementById("btnStart");
  start.addEventListener("click", playGame);
};

const playGame = () => {
  global.timeoutId = setInterval(move, global.MOVE_DELAY);
  move();
};

const move = () => {
  let playField = document.getElementById("playField");
  const x = Math.floor(
    Math.random() * (playField.offsetWidth - global.IMAGE_SIZE)
  );
  const y = Math.floor(
    Math.random() * (playField.offsetHeight - global.IMAGE_SIZE)
  );

  const object = document.createElement("img");
  object.className = "hit";
  object.src =
    global.IMAGE_PATH_PREFIX +
    Math.floor(Math.random() * global.IMAGE_COUNT) +
    global.IMAGE_PATH_SUFFIX;
  object.style.left = x + "px";
  object.style.top = y + "px";

  object.addEventListener("click", function () {
    counter(object);
  });

  playField.appendChild(object);
};

const counter = (object) => {
  global.score++;
  console.log("Score: " + global.score);

  if (object.src.includes("bomb")) {
    clearInterval(global.timeoutId);
    alert("Het spel is afgelopen! Je score is: " + global.score);
  }
};
window.addEventListener("load", setup);
