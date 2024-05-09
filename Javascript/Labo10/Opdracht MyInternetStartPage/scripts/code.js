const setup = () => {
  let button = document.getElementById("btnGo");

  button.addEventListener("click", inputCheck);
};

const inputCheck = () => {
  let input = document.getElementById("commandoInput");
  let command = input.value;

  let regex = command.match("^/[tygi]{1} .*");
  if (regex != null) {
    let commandPrefix = command.slice(0, 2);
    if (commandPrefix === "/g") {
      google(command.slice(3));
    } else if (commandPrefix === "/t") {
      twitter(command.slice(3));
    } else if (commandPrefix === "/y") {
      youtube(command.slice(3));
    } else if (commandPrefix === "/i") {
      instagram(command.slice(3));
    } else {
      alert("Unknown command prefix");
    }
    input.value = "";
  } else {
    alert("Invalid command");
  }
};

const google = (commandoSuffix) => {
  let url = "https://www.google.com/search?q=webdesign";
  window.open(url, "_blank");
  createCardAndAppend("Google", commandoSuffix, url);
  saveLocalStorage("Google", commandoSuffix, url);
};

const twitter = (commandoSuffix) => {
  let url = "https://twitter.com/hashtag/COVID19";
  window.open(url, "_blank");
  createCardAndAppend("Twitter", commandoSuffix, url);
  saveLocalStorage("Twitter", commandoSuffix, url);
};

const youtube = (commandoSuffix) => {
  let url = "http://www.youtube.com/results?search_query=arctic%2Bmonkeys";
  window.open(url, "_blank");
  createCardAndAppend("Youtube", commandoSuffix, url);
  saveLocalStorage("Youtube", commandoSuffix, url);
};

const instagram = (commandoSuffix) => {
  let url = "http://www.instagram.com/explore/tags/viveshwbkortrijk/";
  window.open(url, "_blank");
  createCardAndAppend("Instagram", commandoSuffix, url);
  saveLocalStorage("Instagram", commandoSuffix, url);
};

const createCardAndAppend = (title, commandoSuffix, url) => {
  let col4 = createElementWithClassName("div", "col-4");
  let card = createElementWithClassName("div", "card");
  card.classList.add(title.toLowerCase() + "-card");
  let cardBody = createElementWithClassName("div", "card-body");
  let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
  let cardText = createElementWithClassNameAndText(
    "p",
    "card-text",
    " commandoSuffix"
  );

  let linkGo = createLinkButton(url);
  linkGo.classList.add(title.toLowerCase() + "-button");

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(linkGo);
  card.appendChild(cardBody);
  col4.appendChild(card);

  let row = document.querySelector("#resultContainer > .row");
  row.appendChild(col4);
};

const createLinkButton = (url) => {
  let linkGo = document.createElement("a");
  linkGo.setAttribute("href", url);
  linkGo.setAttribute("target", "_blank");
  linkGo.setAttribute("class", "btn btn-primary");
  linkGo.appendChild(document.createTextNode("Go!"));
  return linkGo;
};

const createElementWithClassName = (element, className) => {
  let e = document.createElement(element);
  e.setAttribute("class", className);
  return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
  let e = createElementWithClassName(element, className);
  e.appendChild(document.createTextNode(text));
  return e;
};

const saveLocalStorage = (title, commandoSuffix, url) => {
  let lsHistory;
  let historyObject = {
    title: title,
    text: commandoSuffix,
    url: url,
  };

  lsHistory = JSON.parse(localStorage.getItem("vives.be.history"));
  if (!lsHistory) {
    lsHistory = [];
  }
  lsHistory.push(historyObject);

  localStorage.setItem("vives.be.history", JSON.stringify(lsHistory));
};

window.addEventListener("load", setup);
