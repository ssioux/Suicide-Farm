// * GAME

class Game {
  constructor() {
    //! Properties
    // Background
    this.floor = new Image();
    this.floor.src = "./images/floor.jpeg";
    // Objets
    this.humanClass = new Human();
    this.pigClass = new Pig();
    this.chickenClass = new Chicken();
    this.rabbitClass = new Rabbit();
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
    ctx.drawImage(this.floor, 0, 0, canvas.width, canvas.height);
  };
  // gameOver

  gameLoop = () => {
    // * 1. Limpiar canvas
    ctx.clearRect(0, 0, canvas.Width, canvas.height);

    // * 2. Acciones y movimientos de los elementos
    
    this.rabbitClass.movementRabbit()
    this.rabbitClass.wallCollideRabbit()
    
    // * 3. Dibujado de los elementos
    this.drawFloor();
    this.humanClass.drawHuman();
    this.pigClass.drawPig();
    this.rabbitClass.drawRabbit();
    this.chickenClass.drawChicken();
    // * 4. Control de la recursion

    requestAnimationFrame(this.gameLoop);
  };
}
