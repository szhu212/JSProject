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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\nclass Game {\n\n    constructor(canvas){\n        this.ctx = canvas.getContext(\"2d\");\n        this.canvas = canvas\n        this.dimensions = { width: canvas.width, height: canvas.height };\n        this.keysTracker = {};\n        this.running = false;\n        this.currentLevel = 0 \n        this.totalTarget = 0 \n        this.registerEvents();\n        this.restart(this.currentLevel);\n        this.levelUp = false;\n        this.gameoverTracker = false;\n    }\n\n    play() {\n        // debugger\n        this.running = true\n        // debugger\n        if (Object.values(this.keysTracker).length > 0 && Object.values(this.keysTracker).some(val => val ===true))\n        {this.animate()};\n      }\n\n    restart(currentLevel) {\n        // debugger\n        console.log(this.currentLevel)\n        this.gameoverTracker = false\n        if (!this.levelUp){\n            this.running = false;\n        }\n        this.startTime = this.startTime || Date.now();\n        this.textTimer = 0\n        this.numTargets = 1\n        // console.log(this.gameover())\n        // console.log(this.currentLevel)\n        // console.log(this.currentLevel <= Object.keys(LEVELS).length)\n        if(this.gameover()){\n            // debugger\n            this.currentLevel = 0\n            this.gameoverTracker = true\n            this.gameoverFrame()\n        } else {\n            this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions, currentLevel);\n            this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions, this.keysTracker, this.level);\n            this.totalTarget = _util__WEBPACK_IMPORTED_MODULE_2__[\"LEVELS\"][this.currentLevel].flat().filter(el => el ===2).length  \n            // debugger\n            this.animate();\n            // cancelAnimationFrame(myReq)\n        }\n    }\n\n    keyDownHandler(e) {\n        // debugger\n        this.keysTracker[e.keyCode] = true;\n        if (this.keysTracker[\"82\"]){\n            // debugger\n            if (this.gameoverTracker){\n                // debugger\n                this.currentLevel = 0\n                this.startTime = Date.now()\n                this.running = false\n                const gameoverPage = document.getElementById(\"gameover-box\")\n                gameoverPage.style.opacity = \"0\";\n                \n            } \n        \n            // debugger\n                this.restart(this.currentLevel)\n        }\n        else if(!this.running){\n            this.play()\n        }\n    \n        // this.player.pushPlayer(this.keysTracker)\n        // debugger\n    }\n\n    keyUpHandler(e) {\n        // debugger\n        this.keysTracker[e.keyCode] = false;\n    }\n    \n    registerEvents() {\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        this.keyUpHandler = this.keyUpHandler.bind(this);\n        document.addEventListener('keydown', (e) => {\n            this.keyDownHandler(e)\n        });\n        document.addEventListener('keyup', (e) => {\n            this.keyUpHandler(e)\n        });\n    }\n\n    drawTimer(){\n        this.timer = Math.floor((Date.now() - this.startTime)/1000)\n        if (this.textTimer === 0 && this.currentLevel === 0){this.timer = 0}\n        this.ctx.font = '20px Dosis'\n        this.ctx.fillStyle = 'rgb(255, 255, 255)';\n        this.ctx.fillText(`${this.timer}`, this.canvas.width -60, 20)\n    }\n\n    drawCounter(){\n        let counterText = `${this.numTargets}/${this.totalTarget}`\n        this.ctx.font = '20px Dosis'\n        this.ctx.fillStyle = 'rgb(255, 255, 255)';\n        this.ctx.fillText(counterText, this.canvas.width -60, 50)\n     }\n\n    animate() {\n        \n        // console.log(Date.now())\n        this.ctx.font = 'Dosis'\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n        this.level.animate(this.ctx, this.player)\n    \n        this.player.animate(this.ctx, this.keysTracker)\n        this.numTargets = this.level.numTargets\n        this.drawTimer()\n        this.drawText()\n        this.drawCounter()\n        if (this.numTargets === 0 && !this.gameoverTracker) {\n            this.currentLevel += 1;\n            this.levelUp = true;\n            this.restart(this.currentLevel)\n        }\n        if (this.running) {\n            requestAnimationFrame(this.animate.bind(this))\n        }\n    }\n\n\n    levelUpText(){\n        this.textTimer += 1\n        this.ctx.save()\n        this.ctx.font = '38px Dosis'\n        this.ctx.fillStyle = 'white';\n        this.ctx.strokeStyle = 'yellow'\n        this.ctx.fillText(`${_util__WEBPACK_IMPORTED_MODULE_2__[\"levelMessages\"][this.currentLevel]}`, this.canvas.width / 3, 100)\n        this.ctx.strokeText(`${_util__WEBPACK_IMPORTED_MODULE_2__[\"levelMessages\"][this.currentLevel]}`, this.canvas.width / 3, 100)\n        // this.ctx.save()\n        this.ctx.font = '28px Dosis';\n        // this.ctx.fillStyle = 'white';\n        this.ctx.strokeStyle = 'skyblue'\n        this.ctx.fillText(`${_util__WEBPACK_IMPORTED_MODULE_2__[\"levelInstruction\"][this.currentLevel]}`, 200, 140);\n        this.ctx.strokeText(`${_util__WEBPACK_IMPORTED_MODULE_2__[\"levelInstruction\"][this.currentLevel]}`, 200, 140);\n        this.ctx.restore();\n    }\n\n    drawText(){\n        if (this.textTimer ===0) {\n            this.ctx.save()\n            this.ctx.font = '25px Dosis'\n            // this.ctx.strokeStyle = 'blue'\n            this.ctx.fillStyle = 'rgba(255,255,255)';\n            this.ctx.shadowColor = 'rgba(0,0,0,0.7)'\n            this.ctx.shadowBlur = 5\n            this.ctx.fillText(\"Press the ↑ ← → buttons on your keyboard to navigate your cube\", this.canvas.width / 12,this.canvas.height *2/ 5, this.canvas.width * 5 / 6)\n            // this.ctx.strokeText(\"Press the ↑ ← → buttons on your keyboard to navigate your cube\", this.canvas.width / 12,this.canvas.height *2/ 5, this.canvas.width * 5 / 6)\n            this.ctx.restore();\n        }\n        if ((this.textTimer < 100 && this.currentLevel !== 0) || (this.currentLevel === 0 && this.textTimer < 100 && this.textTimer >0)){\n            this.levelUpText()\n        } else {\n            this.textTimer += 1\n        }\n    }\n\n    gameover(){\n        return this.currentLevel >= Object.keys(_util__WEBPACK_IMPORTED_MODULE_2__[\"LEVELS\"]).length\n    }\n\n    gameoverFrame(){\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n        const gamePage = document.getElementById('game-page')\n        gamePage.style.backgroundColor = 'orange'\n        const gameoverBox = document.getElementById('gameover-box')\n        gameoverBox.style.transition = 'all 1s ease-in-out;'\n        gameoverBox.style.opacity = 1;\n        // gameoverBox.style.display = block;\n        let gameoverMessageP = document.createElement('p')\n        let minutes = Math.floor(this.timer / 60)\n        let seconds = Math.floor(this.timer % 60)\n        gameoverMessageP.innerHTML = `You spent ${minutes}M ${seconds}S to clear all the levels. Congratulations!`\n        const  gameoverMessage = document.getElementById(\"gameover-messsage\")\n        gameoverMessage.innerHTML = '';\n        gameoverMessage.appendChild(gameoverMessageP)\n        document.getElementById(\"you-won-message\").style.animation = \"shake 0.5s\";\n    }\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    const currentGame = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas)\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nclass Level {\n\n    constructor(dimensions, currentLevel){\n        this.dimensions = dimensions;\n        this.level = JSON.parse(JSON.stringify(_util__WEBPACK_IMPORTED_MODULE_0__[\"LEVELS\"]))[currentLevel];\n        this.currentLevel = currentLevel;\n        // this.bricks = [];\n        this.bricks = {};\n        this.targetLength = 10;\n        this.targets = {};\n        this.numTargets = 0;\n        this.color = '0,92,175';\n        // debugger\n    };\n \n    drawLevel(ctx, player) {\n        const wallWidth = this.dimensions.width / this.level[0].length\n        const wallHeight = this.dimensions.height / this.level.length\n        // debugger\n        let numBricks = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"myCount\"])(this.level.flat(), 1)\n        this.numTargets = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"myCount\"])(this.level.flat(), 2)\n        // console.log(\"Level\")\n        // console.log(LEVELS[0])\n        // ctx.save()\n        for(let row = 0; row < this.level.length; row ++){\n            for(let col= 0; col < this.level[0].length; col++){\n                let leftStart = col * wallWidth;\n                let upStart = row * wallHeight\n                \n                if(this.level[row][col] === 1){\n                    // debugger\n                    // const image = document.getElementById('ice-image');\n                    const image = new Image();\n                    image.src = './assets/brick.png';\n                    // debugger\n                    image.onload = function () {\n                        ctx.drawImage(image, leftStart, upStart, wallWidth, wallHeight);\n                    }\n                    ctx.drawImage(image, leftStart, upStart, wallWidth, wallHeight);\n                   this.bricks[[row, col]] = {left : leftStart, top:upStart, right : (leftStart + wallWidth), bottom : (upStart + wallHeight)}\n                }\n                else if(this.level[row][col] === 2){\n                    // debugger\n                    if(col === 0) {\n                        leftStart += _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].BOARDER_WIDTH\n                    }\n                    if(row === this.level.length){\n                        upStart -= _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].BOARDER_WIDTH\n                    }\n                    let targetColor\n                    // debugger\n                    let pos = row + ',' + col\n                    if (Object.keys(this.targets).includes(pos)){\n                        targetColor = this.targets[[row,col]]\n                    } else {\n                        targetColor = this.randomColor()\n                    }\n                    // ctx.shadowColor = 'white';\n                    // ctx.shadowBlur = 5\n                    ctx.fillStyle = `rgb(${targetColor})`\n                    // debugger \n                    ctx.fillRect(leftStart, upStart, this.targetLength, this.targetLength)\n                    // ctx.lineWidth = 1;\n                    // ctx.strokeStyle = \"rgba(255, 255, 255, 0.5)\";\n                    // ctx.strokeRect(leftStart, upStart, this.targetLength, this.targetLength)\n                    // ctx.restore()\n                    let currentTarget = {left : leftStart, top:upStart, right : (leftStart + this.targetLength), bottom : (upStart + this.targetLength), color: targetColor}\n                    this.targets[[row, col]] = targetColor\n                    // if (this.targets.length > this.numTargets){\n                    //     this.targets = this.targets.slice(1)\n                    // }\n                    if(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"_overlap\"])(player.bounds(), currentTarget)){\n                        // debugger\n                        this.level[row][col] = 0\n                        this.color = currentTarget.color\n                        const gamePage = document.getElementById('game-page')\n                        // gamePage.style.transition = 'background-color 1s ease-in-out;'\n                        gamePage.style.backgroundColor = `rgba(${this.color}, 0.6)`\n                    }\n                }\n            }\n        }\n        // debugger\n    }\n\n    drawBackground(ctx){\n        // debugger\n        ctx.fillStyle = \"rgba(255,255,255,0.4)\"\n        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n        // ctx.fillStyle = `rgba(${this.color}, 0.2)`;\n        // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n        \n    }\n\n    randomColor(){\n        let num = Math.floor(Math.random() * 15)\n        return _util__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][num]\n    }\n\n    animate(ctx, player) {\n        this.drawBackground(ctx);\n        this.drawLevel(ctx, player);    \n    }\n   \n\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass Player {\n\n    constructor(dimensions, keysTracker = {}, level) {\n        this.dimensions = dimensions;\n        this.x = _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].BOARDER_WIDTH;\n        this.y = this.dimensions.height - _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].EDGE //- CONSTANTS.BOARDER_WIDTH;\n        this.velX = 0;\n        this.velY = 0; \n        this.keysTracker = keysTracker;\n        this.level = level;\n        // this.onGround = false;\n        this.collisionAdj = 0;\n    }\n\n\n    drawPlayer(ctx) {\n        ctx.fillStyle = `rgb(${this.level.color})`;\n        ctx.fillRect(this.x, this.y, _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].PLAYER_WIDTH, _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].PLAYER_HEIGHT);\n    }\n\n    // pushPlayer(keysTracker){\n    //     // debugger\n    //     if (keysTracker[KEYS.UP]){\n    //         // this.onGround = false;\n    //         this.velY -= 1 * CONSTANTS.UP_SPEED \n    //         if (this.velY < -CONSTANTS.MAX_SPEED) {\n    //             this.velY = -CONSTANTS.MAX_SPEED\n    //         }\n    //     }\n    //     if (keysTracker[KEYS.LEFT]) {  \n    //         // debugger          \n    //         this.velX -= CONSTANTS.HORIZENTAL_SPEED \n    //     }\n    //     if (keysTracker[KEYS.RIGHT]){         \n    //         this.velX +=  CONSTANTS.HORIZENTAL_SPEED\n    //     }\n    // }\n\n    updatePlayer(keysTracker) {\n        if (keysTracker[_util__WEBPACK_IMPORTED_MODULE_0__[\"KEYS\"].UP]){\n            // this.onGround = false;\n             this.velY -= 1 * _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].UP_SPEED \n             \n        }\n        if (keysTracker[_util__WEBPACK_IMPORTED_MODULE_0__[\"KEYS\"].LEFT]) {  \n            // debugger          \n            this.velX -= _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].HORIZENTAL_SPEED \n        }\n        if (keysTracker[_util__WEBPACK_IMPORTED_MODULE_0__[\"KEYS\"].RIGHT]){         \n            this.velX +=  _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].HORIZENTAL_SPEED\n        }\n        // console.log(this.x, this.y)\n        // this.onGround = false;           \n    // debugger\n        this.velX *= _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].FRICTION  \n        if(this.y < 390){\n            this.velY += _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].GRAVITY \n        }   \n        if(this.velY > 0){\n            this.velY -= _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].AIR_FRICTION \n        } else {\n            this.velY += _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].AIR_FRICTION\n        }\n        // debugger    \n        if(Math.abs(this.velX) > _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].MAX_SPEED){\n                if(this.velX > 0) {\n                    this.velX = _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].MAX_SPEED\n                } else {\n                    this.velX = - 1 * _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].MAX_SPEED\n                }\n        }\n        \n        if(Math.abs(this.velY) > _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].MAX_SPEED){\n            if(this.velY > 0) {\n                this.velY = _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].MAX_SPEED\n            } else {\n                this.velY = -1 * _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].MAX_SPEED\n            }\n        }\n\n        if (this.collideWithBrick()){\n            this.resolveCollision()\n        }\n\n    // if(this.onGround) {\n    //     this.velY = 0;\n    // }\n\n        // console.log(`velY ${this.velY}`)\n        // console.log(`this.y ${this.y}`)\n        this.x += this.velX\n        this.y += this.velY\n\n        if (this.x > this.dimensions.width - _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].PLAYER_WIDTH - _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].BOARDER_WIDTH) {\n            this.x = this.dimensions.width - _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].PLAYER_WIDTH - _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].BOARDER_WIDTH\n        }  else if (this.x < 0) {\n            this.x = _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].BOARDER_WIDTH\n        }\n        if (this.y > this.dimensions.height - _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].PLAYER_HEIGHT) {\n            this.y = this.dimensions.height - _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].PLAYER_HEIGHT\n        }  \n        else if (this.y < 0) {\n            this.y = 0\n        }    \n    }\n\n    bounds(){\n        return {\n            left: this.x,\n            right: (this.x + _util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].PLAYER_WIDTH), \n            top: this.y, \n            bottom: (this.y +_util__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"].PLAYER_HEIGHT)\n        }\n    }\n\n    animate(ctx, keysTracker) {\n        this.updatePlayer(keysTracker);\n        // this.pushPlayer(keysTracker);\n        this.drawPlayer(ctx);\n      \n    }\n\n    collideWithBrick(){\n        let collision = false;\n        // debugger\n        Object.values(this.level.bricks).forEach(\n            brick => {\n            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"_overlap\"])(brick, this.bounds())){\n                collision = true;\n            }\n            })\n        return collision;\n    }\n\n    // collisionDir(){\n    //     let collisionType = [null, null];\n    //     if(!this.collideWithBrick()){return collisionType}\n\n    //     const _overlapDir = (rect1, rect2) => {\n    //         if (rect1.right >= rect2.left && rect1.right <= (rect2.left + rect2.right)/2){\n    //             collisionType[0] =\"left\"\n    //         } else if (rect1.left <= rect2.right && rect1.left <= (rect2.left + rect2.right)/2){\n    //             collisionType[0] = \"right\"\n    //         }\n    //         if(rect1.bottom <= rect2.top && rect1.bottom >= (rect2.top + rect2.bottom)/2){\n    //             collisionType[1] = \"top\"\n    //         } else if (rect1.top <= rect2.bottom && rect1.top <= (rect2.top + rect2.bottom)/2) {\n    //             collisionType[1] = \"bottom\"\n    //         }\n    //     }\n\n    //     this.level.bricks.forEach(brick => {\n    //         _overlapDir(this.bounds(), brick)\n    //     })\n    //     console.log(collisionType)\n    //     return collisionType;\n    // }\n\n    collisionDir(){\n        let collisionDir = [null, null]\n        const _overlapDir = (rect1, rect2) => {\n            const width1 = rect1.right - rect1.left\n            const width2 = rect2.right - rect2.left\n            const height1 = rect1.bottom - rect1.top\n            const height2 = rect2.bottom - rect2.top\n            const centerDistX = (rect1.left + rect1.right)/2 - (rect2.left + rect2.right)/2\n            const centerDistY = (rect1.bottom + rect1.top)/2 - (rect2.bottom + rect2.top)/2\n            const avrWidth = (width1 + width2)/2\n            const avrHeight = (height1 + height2)/2\n            const distX = avrWidth - Math.abs(centerDistX)\n            const distY = avrHeight - Math.abs(centerDistY)\n\n           \n            if (Math.abs(centerDistX) < avrWidth && Math.abs(centerDistY) < avrHeight){\n                if (distX >= distY){\n                    if (centerDistY > 0){\n                        collisionDir[1] = \"top\";\n                        this.collisionAdj = distY\n                    }\n                    else {\n                        collisionDir[1] = \"bottom\";\n                        // rect1.y -= distY;\n                       \n                        // console.log(rect1.y)\n                        this.collisionAdj = -distY\n                    }\n                }\n                else {\n                    if(centerDistX < 0){\n                        collisionDir[0] = \"right\";\n                        this.collisionAdj = -distX\n                    } else {\n                        collisionDir[0] = \"left\";\n                        this.collisionAdj = distX\n                    }\n                }\n            }\n        }\n\n        Object.values(this.level.bricks).forEach(\n            brick => {\n            _overlapDir(this.bounds(), brick)\n        })\n        return collisionDir\n    }\n\n    resolveCollision(){\n        // console.log(this.collisionDir())\n        if (this.collideWithBrick()){\n            if (this.collisionDir()[0] === \"right\"){\n                this.x += this.collisionAdj\n                if(this.velX !== 0) {\n                    this.velX *= -1\n                } else {\n                    this.velX = 0.1\n                }\n            }\n\n            if (this.collisionDir()[0] === \"left\"){\n                this.x += this.collisionAdj\n                if(this.velX !== 0) {\n                    this.velX *= -1\n                } else {\n                    this.velX = -0.1\n                }\n            }\n            if (this.collisionDir()[1] === \"top\"){\n                    this.y += this.collisionAdj\n                    this.velY *= -1\n            }\n            if (this.collisionDir()[1] === \"bottom\"){\n                this.y += this.collisionAdj\n                // this.onGround = true;\n                 if(this.velY<0 && this.velY > -2){\n                this.velY =0 \n               } else {\n                     this.velY *= -1\n                }\n                 this.bottomCollision = true \n\n            }\n            this.collisionAdj = 0\n        }\n\n    }\n\n\n    \n\n}\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: CONSTANTS, KEYS, LEVELS, levelMessages, levelInstruction, colors, _overlap, myCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONSTANTS\", function() { return CONSTANTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEYS\", function() { return KEYS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LEVELS\", function() { return LEVELS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levelMessages\", function() { return levelMessages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levelInstruction\", function() { return levelInstruction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_overlap\", function() { return _overlap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myCount\", function() { return myCount; });\n\nconst CONSTANTS = {\n    GRAVITY: 0.8,\n    FRICTION: 0.8,\n    AIR_FRICTION: 0.4,\n    PLAYER_WIDTH: 15,\n    PLAYER_HEIGHT: 15,\n    UP_SPEED: 2,\n    HORIZENTAL_SPEED: 1,\n    MAX_SPEED: 4,\n    EDGE: 10,\n    BOARDER_WIDTH : 0\n}\n\nconst KEYS = {\n    UP: 38,\n    LEFT: 37,\n    RIGHT: 39\n}\n\nconst LEVELS = {\n    0: [\n        [1,1,1,1,1,0,0],\n        [0,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0],\n        [1,1,0,0,0,0,0],\n        [0,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0],\n        [2,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0],\n        [2,0,1,1,1,0,0]\n    ],\n    1: [\n        [1,1,1,1,1,0,0],\n        [0,0,0,0,0,0,0],\n        [1,1,0,0,0,0,0],\n        [0,0,0,0,0,0,1],\n        [0,0,0,0,0,1,1],\n        [1,1,0,0,0,0,0],\n        [0,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0],\n        [2,0,0,0,0,0,0],\n        [0,0,1,1,1,0,0]\n    ]\n}\n\nconst levelMessages = {\n    0: \"Level 1\",\n    1: \"Level 2\"\n}\n\nconst levelInstruction = {\n    0: \"Have Fun!\",\n    1: \"Level up. Great Job!\"\n}\n\nconst colors = {\n    0: \"255, 186, 132\",\n    1: \"98, 41, 84\",\n    2: \"137, 145, 107\",\n    3: \"145, 180, 147\",\n    4: \"102, 186, 183\",\n    5: \"30, 136, 168\",\n    6: \"123, 144, 210\",\n    7: \"155, 144, 194\",\n    8: \"238, 169, 169\",\n    9: \"93, 172, 129\" ,\n    10: \"24, 60, 138\",\n    11: \"208, 16, 76\",\n    12: \"253, 153, 102\",\n    13: \"190, 194, 63\",\n    14: \"180, 129, 187\"\n}\n\n\nconst _overlap = (rect1, rect2) => {\n    if (rect1.left > rect2.right || rect1.right < rect2.left) {\n        return false;\n    }\n    if (rect1.top > rect2.bottom || rect1.bottom < rect2.top){\n        return false;\n    }\n    return true;\n}\n\nconst myCount = (arr, target) => {\n    return arr.filter(el => el === target).length\n}\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });