let home = document.getElementById("navHome");
let news = document.getElementById("navNews");
let contact = document.getElementById("navContact");

function buttonChange() {
  console.log(home);
  home.classList.toggle("active");
}

let vorname = document.getElementById("vorname");
let nachname = document.getElementById("nachname");
let land = document.getElementById("land");

function infoAusForm() {
  console.log("Der Vorname ist: " + vorname.value);
  console.log("Der Nachname ist: " + nachname.value);
  console.log("Das Land ist: " + land.value);
}

let element = document.getElementById("element");

function smallborderChange() {
  console.log(element);
  element.classList.add("smallButtonChange");
  element.classList.remove("middleButtonChange");
  element.classList.remove("bigButtonChange");
}
function middleBorderChange() {
  console.log(element);
  element.classList.remove("smallButtonChange");
  element.classList.add("middleButtonChange");
  element.classList.remove("bigButtonChange");
}
function bigBorderChange() {
  console.log(element);
  element.classList.remove("smallButtonChange");
  element.classList.remove("middleButtonChange");
  element.classList.add("bigButtonChange");
}
