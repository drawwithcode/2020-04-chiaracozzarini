var input;
var title;
var subtitle;
var start;

function preload(){
}

function setup() {
  title = createElement("h1", "A Journey through my SWEET QUARANTINE");
  subtitle = createElement("h2", "Here's how I am handling the lockdown");
  start = createButton("tell me more");
  start.mouseClicked(goToPage);
}

function goToPage(){
  window.open('index2.html', "_self");
}
