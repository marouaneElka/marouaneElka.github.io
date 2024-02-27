const setup = () => {
  const arr = ["John", "Bon", "Kon", "Lom", "Don"];

  console.log(arr.length);

  console.log(arr[0], arr[2], arr[4]);

  voegNaamToe(arr);
  console.log(arr);

  let converteer = arr.join();
  console.log(converteer);
};

const voegNaamToe = (newArr) => {
  let woord = prompt("Vul een naam in");
  newArr.push(woord);
};

window.addEventListener("load", setup);
