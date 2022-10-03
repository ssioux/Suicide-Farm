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
    //this.chickenClass = new Chicken();
    this.rabbitClass = new Rabbit();
    // ArraysObjets
    this.chickenCage = [];
    this.pigCage = [];
    this.rabbitCage = [];
    // Others
    this.frames = 0;
  }

  // ! METHODS

  // addPig
  // addChicken
  addChicken = () => {
    if (this.frames % 180 === 0) {
      let randomChickenX = Math.random() * 100;
      let randomChickenY = Math.random() * 100;
      let rChickenX = Math.floor(randomChickenX);
      let rChickenY = Math.floor(randomChickenY);

      let newChicken = new Chicken(rChickenX, rChickenY);
      this.chickenCage.push(newChicken);
    }
  };

  // addRabbit

  chickenHumanWound = () => {};
  // rabbitHumanWound = () => {}
  // pigHumanWound = () => {}

  // pigGoesOut = Lost
  // drawFloor
  drawFloor = () => {
    ctx.drawImage(this.floor, 0, 0, canvas.width, canvas.height);
  };
  // gameOver

  gameLoop = () => {
    this.frames = this.frames + 1;

    // * 1. Limpiar canvas
    ctx.clearRect(0, 0, canvas.Width, canvas.height);

    // * 2. Acciones y movimientos de los elementos
    this.addChicken();
    this.chickenCage.forEach((eachChicken) => {
      eachChicken.movementChicken();
    });
    this.chickenCage.forEach((eachChicken) => {
      eachChicken.wallCollideChicken();
    });
    //this.chickenClass.movementChicken()
    this.rabbitClass.movementRabbit();
    this.rabbitClass.wallCollideRabbit();
    this.pigClass.movementPig();

    // * 3. Dibujado de los elementos
    this.drawFloor();
    this.humanClass.drawHuman();
    this.pigClass.drawPig();
    this.rabbitClass.drawRabbit();

    this.chickenCage.forEach((eachChicken) => {
      eachChicken.drawChicken();
    });

    //this.chickenClass.drawChicken();
    // * 4. Control de la recursion

    requestAnimationFrame(this.gameLoop);
  };
}
