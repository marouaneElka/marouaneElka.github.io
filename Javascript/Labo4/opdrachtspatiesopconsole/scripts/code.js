const setup = () => {
  let btnSend = document.getElementById("btnSend");
  btnSend.addEventListener("click", spatie);
};

const spatie = () => {
  let text = document.getElementById("text").value;
  let myArr = text.split("");
  text = "";
  for (let i = 0; i < myArr.length; i++) {
    text += myArr[i] + " ";
  }

  console.log(text);
};
window.addEventListener("load", setup);
