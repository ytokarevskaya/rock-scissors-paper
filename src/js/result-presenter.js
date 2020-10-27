export default class ResultPresenter {
	constructor(resultFrame, buttonsFrame) {
		this.buttonsFrame = document.querySelector(".buttons__frame");
		this.playResult = document.querySelector(".result__frame-play");
		this.gameResult = document.querySelector(".result__frame-game")
	}

	playOver(playStatus, userChoice, computerChoice) {
		let statusText = "It's a draw!";
		if (playStatus === 1) {
			statusText = "Success!";
		} else if (playStatus === 2) {
			statusText = "Fail!";
		}
		const text = `<p>${statusText} You chose <strong>${userChoice}</strong>. Computer chose <strong>${computerChoice}</strong></p>`
  		this.playResult.innerHTML = text;
	}

	gameOver(winnerName) {
		this.buttonsFrame.classList.add("inactive");
		this.gameResult.innerHTML = `<h2>${winnerName === "user"? "Congrats! You won :)" : "Oh, no! You lost :("}</h2>`;
	}
}