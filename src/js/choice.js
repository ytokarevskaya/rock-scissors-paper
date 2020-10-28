export default class Choice {
	constructor(name = null) {
		this.name = name;
	}

	setRandom() {
		const randomNumber = Math.floor(Math.random() * 3);
	  if (randomNumber === 0) {
	    this.name = "rock";
	  } else if (randomNumber === 1) {
	    this.name = "paper";
	  } else if (randomNumber === 2) {
	    this.name = "scissors";
	  }
	}

	setChoice(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}