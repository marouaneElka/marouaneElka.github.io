const setup = () => {
  let element = document.createElement("p"); //create an elementNod
  element.setAttribute("class", "color");

  let textNode = document.createTextNode("Hello World!"); //create a textNode
  element.appendChild(textNode);
  document.querySelector("#myDiv").appendChild(element);
};
window.addEventListener("load", setup);
