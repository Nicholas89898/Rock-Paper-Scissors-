const rock = 1;
const paper = 2;
const scissors = 3;

let choice = Math.trunc(Math.random() * 3) + 1;

document.querySelector(".rock").addEventListener("click", function () {
  if (choice === 3) {
    document.querySelector(".result").textContent =
      "You choose Rock🪨 the AI choose Scissors✂️|You win 🥳🎉 ";
  } else if (choice === 2) {
    document.querySelector(".result").textContent =
      "You choose Rock🪨 the AI choose Paper📃|AI wins 🤖 ";
  } else {
    document.querySelector(".result").textContent =
      "You choose Rock🪨 the AI choose Rock🪨|It is a tie";
  }
});

document.querySelector(".paper").addEventListener("click", function () {
  if (choice === 1) {
    document.querySelector(".result").textContent =
      "You choose Paper📃 the AI choose Rock🪨|You win 🥳🎉 ";
  } else if (choice === 3) {
    document.querySelector(".result").textContent =
      "You choose  Paper📃 the AI choose Scissors✂️|AI wins 🤖 ";
  } else {
    document.querySelector(".result").textContent =
      "You choose Paper📃 the AI choose Paper📃|It is a tie";
  }
});

document.querySelector(".sciccors").addEventListener("click", function () {
  if (choice === 2) {
    document.querySelector(".result").textContent =
      "You choose Scissors✂️ the AI choose Paper📃|You win 🥳🎉 ";
  } else if (choice === 1) {
    document.querySelector(".result").textContent =
      "You choose  Scissors✂️ the AI choose Rock🪨|AI wins 🤖 ";
  } else {
    document.querySelector(".result").textContent =
      "You choose Scissors✂️ the AI choose Scissors✂️|It is a tie";
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".result").textContent =
    "You choose () AI choose ()|You/AI won🥳🎉";
  choice = Math.trunc(Math.random() * 3) + 1;
});

console.log(choice);
