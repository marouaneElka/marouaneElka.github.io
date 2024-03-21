const setup = () => {
  tree();
};

const tree = () => {
  let s = "";
  const hoogte = 6;
  for (let i = 0; i < hoogte; i++) {
    s += "*";
    console.log(s);
  }
};
window.addEventListener("load", setup);
