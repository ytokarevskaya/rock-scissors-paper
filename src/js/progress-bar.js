export default class ProgressBar {
	constructor() {
		this.userBar = document.querySelector(".progressbar__part.user");
		this.computerBar = document.querySelector(".progressbar__part.computer");
	}

	setBarPosition(name, score) {
		const bar = name === "user"? this.userBar : this.computerBar;
		bar.querySelector(".progressbar__part-fill").style.width = `${100 / 5 * score}%`;
	}

	restart() {
		this.userBar.querySelector(".progressbar__part-fill").style.width = 0;
		this.computerBar.querySelector(".progressbar__part-fill").style.width = 0;
	}
}