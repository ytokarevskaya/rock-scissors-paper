/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/main.js */ \"./src/js/main.js\");\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/js/choice.js":
/*!**************************!*\
  !*** ./src/js/choice.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Choice; });\nclass Choice {\r\n\tconstructor(name = null) {\r\n\t\tthis.name = name;\r\n\t}\r\n\r\n\tsetRandom() {\r\n\t\tconst randomNumber = Math.floor(Math.random() * 3);\r\n\t  if (randomNumber === 0) {\r\n\t    this.name = \"rock\";\r\n\t  } else if (randomNumber === 1) {\r\n\t    this.name = \"paper\";\r\n\t  } else if (randomNumber === 2) {\r\n\t    this.name = \"scissors\";\r\n\t  }\r\n\t}\r\n\r\n\tsetChoice(name) {\r\n\t\tthis.name = name;\r\n\t}\r\n\r\n\tgetName() {\r\n\t\treturn this.name;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/js/choice.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar */ \"./src/js/progress-bar.js\");\n/* harmony import */ var _result_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result-presenter */ \"./src/js/result-presenter.js\");\n\r\n\r\n\r\nconst progressBar = new _progress_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst resultPresenter = new _result_presenter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nclass Game {\r\n\tconstructor(playStatus = null) {\r\n\t\tthis.playStatus = playStatus; // 0 - draw, 1 - user win, 2 - computer win\r\n\t\tthis.score = {\r\n\t\t\tcomputer: 0,\r\n\t\t\tuser: 0\r\n\t\t}\r\n\t\tthis.settings = {\r\n\t\t\tplaysToWin: 5\r\n\t\t}\r\n\t}\r\n\r\n\tdefineWinner(userChoice, computerChoice) {\r\n\t\tif (userChoice === computerChoice) {\r\n\t\t\tthis.playStatus = 0;\r\n\t\t} else if (userChoice === \"rock\") {\r\n\t    this.playStatus = computerChoice === \"scissors\" ? 1 : 2;\r\n\t  } else if (userChoice === \"paper\") {\r\n\t  \tthis.playStatus = computerChoice === \"rock\" ? 1 : 2;\r\n\t  } else if (userChoice === \"scissors\") {\r\n\t  \tthis.playStatus = computerChoice === \"paper\" ? 1 : 2;\r\n\t  }\r\n\t  this.updateScore(this.playStatus);\r\n\t  resultPresenter.playOver(this.playStatus, userChoice, computerChoice);\r\n\t  if (this.playStatus) {\r\n\t  \tconst winnerName = this.playStatus === 1? \"user\" : \"computer\";\r\n\t  \tprogressBar.setBarPosition(winnerName, this.score[winnerName]);\r\n\t  }\r\n\t  return this.playStatus;\r\n\t}\r\n\r\n\tupdateScore(playStatus) {\r\n\t\tif (playStatus === 1) {\r\n\t\t\tthis.score.user++;\r\n\t\t} else if (playStatus === 2) {\r\n\t\t\tthis.score.computer++;\r\n\t\t}\r\n\t\tif (this.score.user === 5) {\r\n\t\t\tresultPresenter.gameOver(\"user\");\r\n\t\t} else if (this.score.computer === 5) {\r\n\t\t\tresultPresenter.gameOver(\"computer\");\r\n\t\t}\r\n\t}\r\n\r\n\tnewGame() {\r\n\t\tthis.playStatus = null;\r\n\t\tthis.score.computer = 0;\r\n\t\tthis.score.user = 0;\r\n\t\tprogressBar.restart();\r\n\t\tresultPresenter.newGame();\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n/* harmony import */ var _choice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choice */ \"./src/js/choice.js\");\n\r\n\r\n\r\nconst scoreFrame = document.getElementById(\"score\");\r\nconst tryAgain = document.querySelector(\".result__frame-play-again\");\r\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\ndocument.querySelectorAll(\".buttons__item\").forEach(button => {\r\n  button.addEventListener(\"click\", startGame);\r\n});\r\n\r\ntryAgain.addEventListener(\"click\", () => {\r\n  game.newGame();\r\n})\r\n\r\nfunction startGame(event) {\r\n  const userChoice = new _choice__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dataset.target);\r\n  const computerChoice = new _choice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  computerChoice.setRandom();\r\n  game.defineWinner(userChoice.getName(), computerChoice.getName());\r\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/progress-bar.js":
/*!********************************!*\
  !*** ./src/js/progress-bar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProgressBar; });\nclass ProgressBar {\r\n\tconstructor() {\r\n\t\tthis.userBar = document.querySelector(\".progressbar__part.user\");\r\n\t\tthis.computerBar = document.querySelector(\".progressbar__part.computer\");\r\n\t}\r\n\r\n\tsetBarPosition(name, score) {\r\n\t\tconst bar = name === \"user\"? this.userBar : this.computerBar;\r\n\t\tbar.querySelector(\".progressbar__part-fill\").style.width = `${100 / 5 * score}%`;\r\n\t}\r\n\r\n\trestart() {\r\n\t\tthis.userBar.querySelector(\".progressbar__part-fill\").style.width = 0;\r\n\t\tthis.computerBar.querySelector(\".progressbar__part-fill\").style.width = 0;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/js/progress-bar.js?");

/***/ }),

/***/ "./src/js/result-presenter.js":
/*!************************************!*\
  !*** ./src/js/result-presenter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResultPresenter; });\nclass ResultPresenter {\r\n\tconstructor() {\r\n\t\tthis.buttonsFrame = document.querySelector(\".buttons__frame\");\r\n\t\tthis.playResult = document.querySelector(\".result__frame-play\");\r\n\t\tthis.gameResult = document.querySelector(\".result__frame-game\");\r\n\t\tthis.tryAgain = document.querySelector(\".result__frame-play-again\");\r\n\t}\r\n\r\n\tplayOver(playStatus, userChoice, computerChoice) {\r\n\t\tlet statusText = \"It's a draw!\";\r\n\t\tif (playStatus === 1) {\r\n\t\t\tstatusText = \"Success!\";\r\n\t\t} else if (playStatus === 2) {\r\n\t\t\tstatusText = \"Fail!\";\r\n\t\t}\r\n\t\tconst text = `<p>${statusText} You chose <strong>${userChoice}</strong>. Computer chose <strong>${computerChoice}</strong></p>`\r\n  \t\tthis.playResult.innerHTML = text;\r\n\t}\r\n\r\n\tgameOver(winnerName) {\r\n\t\tthis.buttonsFrame.classList.add(\"inactive\");\r\n\t\tthis.gameResult.innerHTML = `<h2>${winnerName === \"user\"? \"Congrats! You won :)\" : \"Oh, no! You lost :(\"}</h2>`;\r\n\t\tthis.tryAgain.classList.add(\"is-visible\");\r\n\t}\r\n\r\n\tnewGame() {\r\n\t\tthis.buttonsFrame.classList.remove(\"inactive\");\r\n\t\tthis.gameResult.innerHTML = \"\";\r\n\t\tthis.playResult.innerHTML = \"\";\r\n\t\tthis.tryAgain.classList.remove(\"is-visible\");\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/js/result-presenter.js?");

/***/ })

/******/ });