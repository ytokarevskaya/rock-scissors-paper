import Game from "./game";
import Choice from "./choice";

const scoreFrame = document.getElementById("score");
const game = new Game();

document.querySelectorAll(".buttons__item").forEach(button => {
  button.addEventListener("click", startGame);
})

function startGame(event) {
  const userChoice = new Choice(this.dataset.target);
  const computerChoice = new Choice();
  computerChoice.setRandom();
  game.defineWinner(userChoice.getName(), computerChoice.getName());
}