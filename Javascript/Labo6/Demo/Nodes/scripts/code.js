const setup = () => {
  let p = document.getElementById("para");
  //get node name and node type
  console.log(p.nodeName, p.nodeType); // P 1

  //get node name and node type of childe node
  console.log(p.firstChild.nodeName, p.firstChild.nodeType); //#text 3
  //get node name and node type of next sybling
  console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType);
};
window.addEventListener("load", setup);
