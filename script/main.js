console.log("testing");
// ! GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
//                    * DOM *
const startScreen = document.querySelector("#startmenu-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreen = document.querySelector("#gameover-screen");
const reStartBtn = document.querySelector("#restart-btn");

let gameClass;

// ! STATE MANAGEMENT FUNCTIONS
// startGame
const startGame = () => {
  console.log("iniciando canvas");
  startScreen.style.display = "none";
  canvas.style.display = "grid";
  gameClass = new Game()
  gameClass.gameLoop()
  
};

// reStartGame

const reStartGame = () => {};

// ! ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);

reStartBtn.addEventListener("click", reStartGame);
