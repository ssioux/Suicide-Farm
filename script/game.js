// * GAME

class Game {
  constructor() {
    //! Properties
    // Fondo
    this.floor = new Image();
    this.floor.src = "./images/floor.jpeg";
    // Human
    // Pig
    // Chicken
    // Rabbit
    // bonus pajar
  }

  // ! METHODS

  // addPig
  // addChicken
  // addRabbit

  // chickenHumanWound = () => {}
  // rabbitHumanWound = () => {}
  // pigHumanWound = () => {}

  // pigGoesOut = Lost
  // drawFloor
  drawFloor = () => {

    ctx.drawImage(this.floor, 0, 0, canvas.width, canvas.height)
  }
  // gameOver

  gameLoop = () => {
    // * 1. Limpiar canvas
    ctx.clearRect(0, 0, canvas.Width, canvas.height)

    // * 2. Acciones y movimientos de los elementos

    // * 3. Dibujado de los elementos
    this.drawFloor()
    // * 4. Control de la recursion

    requestAnimationFrame(this.gameLoop);
  };
}
