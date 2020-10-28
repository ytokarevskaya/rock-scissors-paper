import ProgressBar from "./progress-bar"
import ResultPresenter from "./result-presenter"

const progressBar = new ProgressBar();
const resultPresenter = new ResultPresenter();

export default class Game {
	constructor(playStatus = null) {
		this.playStatus = playStatus; // 0 - draw, 1 - user win, 2 - computer win
		this.score = {
			computer: 0,
			user: 0
		}
		this.settings = {
			playsToWin: 5
		}
	}

	defineWinner(userChoice, computerChoice) {
		if (userChoice === computerChoice) {
			this.playStatus = 0;
		} else if (userChoice === "rock") {
	    this.playStatus = computerChoice === "scissors" ? 1 : 2;
	  } else if (userChoice === "paper") {
	  	this.playStatus = computerChoice === "rock" ? 1 : 2;
	  } else if (userChoice === "scissors") {
	  	this.playStatus = computerChoice === "paper" ? 1 : 2;
	  }
	  resultPresenter.loaderOn();
	  setTimeout(() => {
	  	resultPresenter.loaderOff();
	  	resultPresenter.playOver(this.playStatus, userChoice, computerChoice);
	  	this.updateScore(this.playStatus);
	  	if (this.playStatus) {
		  	const winnerName = this.playStatus === 1? "user" : "computer";
		  	progressBar.setBarPosition(winnerName, this.score[winnerName]);
		  }
	  }, 1500);
	  
	  return this.playStatus;
	}

	updateScore(playStatus) {
		if (playStatus === 1) {
			this.score.user++;
		} else if (playStatus === 2) {
			this.score.computer++;
		}
		if (this.score.user === 5) {
			resultPresenter.gameOver("user");
		} else if (this.score.computer === 5) {
			resultPresenter.gameOver("computer");
		}
	}

	newGame() {
		this.playStatus = null;
		this.score.computer = 0;
		this.score.user = 0;
		progressBar.restart();
		resultPresenter.newGame();
	}
}