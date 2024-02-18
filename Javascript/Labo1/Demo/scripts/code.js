const setup = () => {
  let lb1Cursus = document.getElementById("lb1Cursus");
  lb1Cursus.addEventListener("mouseover", change);

  let btnSend = document.getElementById("btnSend");
  btnSend.addEventListener("click", show);
};

const show = () => {
  let txtName = document.getElementById("txtName");

  if (txtName.value != "") {
    alert("Jouw naam is " + txtName.value);
    console.log("Jouw naam is " + txtName.value);
    console.log(`Jouw naam is  ${txtName.value}`);
  } else {
    alert("Gelieven naam in te vullen");
  }
};

const change = () => {
  let lb1Cursus = document.getElementById("lb1Cursus");
  lb1Cursus.className = "cursus";
};
window.addEventListener("load", setup);
