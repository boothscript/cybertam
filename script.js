const petContainer = document.querySelector("#pet-container");
const textBar = document.querySelector("#text-bar");
const healthStatusBar = document.querySelector("#health");
const energyStatusBar = document.querySelector("#energy");
const foodStatusBar = document.querySelector("#food");
const waterStatusBar = document.querySelector("#water");
const happinessStatusBar = document.querySelector("#happiness");
const playButton = document.querySelector("#play");
const feedButton = document.querySelector("#feed");
const waterButton = document.querySelector("#drink");
const napButton = document.querySelector("#nap");
const petButton = document.querySelector("#pet");

// create cyber pet
const cyberPet = new CyberPet("Tam", petContainer);

// BUTTON EVENT HANDLERS
const actionButtons = [
  playButton,
  feedButton,
  waterButton,
  napButton,
  petButton,
];

// CyberPet EVENT HANDLERS

petContainer.addEventListener("propsDidUpdate", () => {
  console.log("testing");
  updateStatusBars();
  // possible animation
});
petContainer.addEventListener("petAlert", (e) => {
  textBar.innerHTML = e.detail.text;
});

petContainer.addEventListener("petIsDead", (e) => {
  textBar.innerHTML = e.detail.text;
  animateDeath();
});

actionButtons.forEach((actionButton) => {
  actionButton.addEventListener("click", (e) => {
    cyberPet[actionButton.id]();
    updateStatusBars();
  });
});

const statusBars = [
  healthStatusBar,
  energyStatusBar,
  foodStatusBar,
  waterStatusBar,
  happinessStatusBar,
];

function updateStatusBars() {
  statusBars.forEach((statusBar) => {
    statusBar.style.width = `${cyberPet[statusBar.id]}%`;
  });
}

// display initial values
updateStatusBars();
console.log("here");
// start pet
cyberPet.tick();
idle();
