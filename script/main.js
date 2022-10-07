// ! GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
//                    * DOM *
const startScreen = document.querySelector("#startmenu-screen");
const leftMenu = document.querySelector("#left-menu")
const startBtn = document.querySelector(".start-btn");
const gameOverScreen = document.querySelector("#gameover-screen");
const reStartBtn = document.querySelector("#restart-btn");
const scoreNumber = document.querySelector("#gameover-screen p span");
const nickName = document.querySelector("#name");
const addBtn = document.querySelector("#add-btn");
const nameInGameOver = document.querySelector("#gameover-screen h1");

let gameClass;



// ! STATE MANAGEMENT FUNCTIONS
// startGame
const startGame = () => {

  startScreen.style.display = "none";
  canvas.style.display = "grid";
  gameClass = new Game();
  gameClass.gameLoop();
  gameClass.gameMusic.play();
};

// reStartGame
const reStartGame = () => {
  gameOverScreen.style.display = "none";
  canvas.style.display = "block";
  gameClass = new Game();
  gameClass.gameLoop();
  gameClass.gameMusic.play();
};

const inName = () => {
  nameInGameOver.innerText = nickName.value 
}

// ! ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
reStartBtn.addEventListener("click", reStartGame);
addBtn.addEventListener("click", inName)
window.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    gameClass.noShoot = false;
  }
});

window.addEventListener("keydown", (event) => {
  if (
    event.code === "KeyD" &&
    gameClass.humanClass.x < canvas.width - gameClass.humanClass.w
  ) {
    gameClass.humanClass.x = gameClass.humanClass.x + 60;
  } else if (event.code === "KeyA" && gameClass.humanClass.x > 0) {
    gameClass.humanClass.x = gameClass.humanClass.x - 60;
  } else if (event.code === "KeyW" && gameClass.humanClass.y > 0) {
    gameClass.humanClass.y = gameClass.humanClass.y - 60;
  } else if (
    event.code === "KeyS" &&
    gameClass.humanClass.y < canvas.height - gameClass.humanClass.h
  ) {
    gameClass.humanClass.y = gameClass.humanClass.y + 60;
  }
});
