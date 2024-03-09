const setup = () => {
  let btnSend = document.getElementById("btnSend");
  let text = document.getElementById("text");
  btnSend.addEventListener("click", () => {
    maakMetSpaties(text.value);
  });
};

const maakMetSpaties = (inputText) => {
  let result = "";
  for (let i = 0; i < inputText.length; i++) {
    result += inputText[i] + " ";
  }
  console.log(result);
  return result;
};
window.addEventListener("load", setup);
