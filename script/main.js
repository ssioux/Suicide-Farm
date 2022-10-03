console.log("testing");
// ! GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
//                    * DOM *
const startScreen = document.querySelector("#startmenu-screen");
const startBtn = document.querySelector(".start-btn");
const gameOverScreen = document.querySelector("#gameover-screen");
const reStartBtn = document.querySelector("#restart-btn");

let gameClass;

// ! STATE MANAGEMENT FUNCTIONS
// startGame
const startGame = () => {
  console.log("iniciando canvas");
  startScreen.style.display = "none";
  canvas.style.display = "grid";
  gameClass = new Game();
  gameClass.gameLoop();
};

// reStartGame

const reStartGame = () => {};

// ! ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
reStartBtn.addEventListener("click", reStartGame);

window.addEventListener("keydown", (event) => {
  if (
    event.code === "ArrowRight" &&
    gameClass.humanClass.x < canvas.width - gameClass.humanClass.w
  ) {
    gameClass.humanClass.x = gameClass.humanClass.x + 15;
  } else if (event.code === "ArrowLeft" && gameClass.humanClass.x > 0) {
    gameClass.humanClass.x = gameClass.humanClass.x - 15;
  } else if (event.code === "ArrowUp" && gameClass.humanClass.y > 0) {
    gameClass.humanClass.y = gameClass.humanClass.y - 15;
  } else if (
    event.code === "ArrowDown" &&
    gameClass.humanClass.y < canvas.height - gameClass.humanClass.h
  ) {
    gameClass.humanClass.y = gameClass.humanClass.y + 15;
  }
});
