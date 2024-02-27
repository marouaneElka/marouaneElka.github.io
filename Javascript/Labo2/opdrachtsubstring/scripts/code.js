const setup = () => {
  let btnSubstring = document.getElementById("btnSubstring");
  btnSubstring.addEventListener("click", knip);
};

const knip = () => {
  let txtInput = document.getElementById("txtInput").value;
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let txtOutput = document.getElementById("txtOutput");

  txtOutput.innerHTML = txtInput.substring(num1, num2);
};
window.addEventListener("load", setup);
