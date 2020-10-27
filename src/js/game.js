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
	    if (computerChoice === "paper") {
	      this.playStatus = 2;
	    } else {
	      this.playStatus = 1;
	    }
	  } else if (userChoice === "paper") {
	    if (computerChoice === "rock") {
	      this.playStatus = 1;
	    } else {
	      this.playStatus = 2;
	    }
	  } else if (userChoice === "scissors") {
	    if (computerChoice === "paper") {
	      this.playStatus = 1;
	    } else {
	      this.playStatus = 2;
	    }
	  }
	  this.updateScore(this.playStatus);
	  resultPresenter.playOver(this.playStatus, userChoice, computerChoice);
	  if (this.playStatus) {
	  	const winnerName = this.playStatus === 1? "user" : "computer";
	  	progressBar.setBarPosition(winnerName, this.score[winnerName]);
	  }
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
}