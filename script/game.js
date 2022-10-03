// * GAME

class Game {
  constructor() {
    //! Properties
    // Background
    this.floor = new Image();
    this.floor.src = "./images/floor.jpeg";
    // Objets
    this.humanClass = new Human();
    //this.pigClass = new Pig();
    //this.chickenClass = new Chicken();
    //this.rabbitClass = new Rabbit();
    // ArraysObjets
    this.chickenCage = [];
    this.pigCage = [];
    this.rabbitCage = [];
    // Others
    this.frames = 0;
    this.gameOn = true;
  }

  // ! METHODS

  gameOver = () => {
    this.gameOn = false;
    canvas.style.display = "none";
    gameOverScreen.style.display = "grid";
  };

  // addElements
  addChicken = () => {
    if (this.frames % 180 === 0) {
 
      let rChickenX = Math.floor(Math.random() * 100);
      let rChickenY = Math.floor(Math.random() * 100);

      //let randomChickenDX = Math.random() * 2;
      //let randomChickenDY = Math.random() * 2;
      //let rChickenDX = Math.floor(randomChickenDX);
      //let rChickenDY = Math.floor(randomChickenDY);

      let newChicken = new Chicken(rChickenX, rChickenY);
      this.chickenCage.push(newChicken);
    }
  };

  addRabbit = () => {
    if (this.frames % 360 === 0) {
      // 6 secs

      let rRabbitX = Math.floor(Math.random() * (canvas.width - 550) + 550);
      let rRabbitY = Math.floor(Math.random() * (canvas.height - 200) + 200);

      let newRabbit = new Rabbit(rRabbitX, rRabbitY);
      this.rabbitCage.push(newRabbit);
    }
  };

  addPig = () => {
    if (this.frames % 300 === 0) {
      // 5 secs
      let newPig = new Pig();
      this.pigCage.push(newPig);
    }
  };

  chickenHumanWound = () => {
    this.chickenCage.forEach((eachChicken) => {
      if (
        this.humanClass.x < eachChicken.x + eachChicken.w &&
        this.humanClass.x + this.humanClass.w > eachChicken.x &&
        this.humanClass.y < eachChicken.y + eachChicken.h &&
        this.humanClass.h + this.humanClass.y > eachChicken.y
      ) {
        this.gameOver()
      }
    });
  };
  rabbitHumanWound = () => {
    this.rabbitCage.forEach((eachRabbit) => {
      if (
        this.humanClass.x < eachRabbit.x + eachRabbit.w &&
        this.humanClass.x + this.humanClass.w > eachRabbit.x &&
        this.humanClass.y < eachRabbit.y + eachRabbit.h &&
        this.humanClass.h + this.humanClass.y > eachRabbit.y
      ) {
        this.gameOver()
      }
    });
  };

  pigHumanWound = () => {
    this.pigCage.forEach((eachPig) => {
      if (
        this.humanClass.x < eachPig.x + eachPig.w &&
        this.humanClass.x + this.humanClass.w > eachPig.x &&
        this.humanClass.y < eachPig.y + eachPig.h &&
        this.humanClass.h + this.humanClass.y > eachPig.y
      ) {
        this.gameOver()
      } else if (eachPig.y > canvas.height) {
        this.gameOver()
      }
    });
  };
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
    //             Pig addLoop
    this.addPig();
    this.pigCage.forEach((eachPig) => {
      eachPig.movementPig();
    });

    this.pigHumanWound()
    //          Rabbit addLoop
    this.addRabbit();
    this.rabbitCage.forEach((eachRabbit) => {
      eachRabbit.movementRabbit();
    });
    this.rabbitCage.forEach((eachRabbit) => {
      eachRabbit.wallCollideRabbit();
    });

    this.rabbitHumanWound()

    //         Chicken addLoop
    this.addChicken();
    this.chickenCage.forEach((eachChicken) => {
      eachChicken.movementChicken();
    });
    this.chickenCage.forEach((eachChicken) => {
      eachChicken.wallCollideChicken();
    });

    this.chickenHumanWound();
    //this.chickenClass.movementChicken()
    //this.rabbitClass.movementRabbit();
    //this.rabbitClass.wallCollideRabbit();
    //this.pigClass.movementPig();

    // * 3. Dibujado de los elementos
    this.drawFloor();
    this.humanClass.drawHuman();
    //this.pigClass.drawPig();
    //this.rabbitClass.drawRabbit();
    this.rabbitCage.forEach((eachRabbit) => {
      eachRabbit.drawRabbit();
    });

    this.pigCage.forEach((eachPig) => {
      eachPig.drawPig();
    });

    this.chickenCage.forEach((eachChicken) => {
      eachChicken.drawChicken();
    });

    //this.chickenClass.drawChicken();
    // * 4. Control de la recursion
    if (this.gameOn === true){
    requestAnimationFrame(this.gameLoop);
    }
  };
}
