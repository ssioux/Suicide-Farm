// * GAME

class Game {
  constructor() {
    //! Properties
    // Background
    this.floor = new Image();
    this.floor.src = "./images/floor.jpeg";

    // Objets
    this.humanClass = new Human();

    // ArraysObjets
    this.chickenCage = [];
    this.pigCage = [];
    this.strongPigCage = [];
    this.rabbitCage = [];
    this.fastRabbitCage = [];
    this.potatoReload = [];

    // Others
    this.frames = 0;
    this.gameOn = true;
    this.noShoot = true;
    this.score = 0;

    // Audio
    this.gameMusic = new Audio();
    this.gameMusic.src =
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
  }

  // ! METHODS

  //   ************** HIT



  potatoChickenHit = () => {
    this.potatoReload.forEach((eachPotato, indexPotato) => {
      this.chickenCage.forEach((eachChicken, indexChicken) => {
        if (
          eachChicken.x < eachPotato.x + eachPotato.w &&
          eachChicken.x + eachChicken.w > eachPotato.x &&
          eachChicken.y < eachPotato.y + eachPotato.h &&
          eachChicken.h + eachChicken.y > eachPotato.y
        ) {
          
          this.potatoReload.splice(indexPotato, 1); 

          if (eachChicken.hadImpacted === false){            
          this.chickenCage[indexChicken].img.src = "./images/chicken2.png";
          this.chickenCage[indexChicken].xDirection = 0;
          this.chickenCage[indexChicken].yDirection = 0;
          let removeChicken = setTimeout(() => {
            this.chickenCage.splice(indexChicken, 1)
            this.score = this.score + 10
          }, 500);
          eachChicken.hadImpacted = true
          }
        
        } 
      });
    });
  };

  potatoPigHit = () => {
    this.potatoReload.forEach((eachPotato, indexPotato) => {
      this.pigCage.forEach((eachPig, indexPig) => {
        if (
          eachPig.x < eachPotato.x + eachPotato.w &&
          eachPig.x + eachPig.w > eachPotato.x &&
          eachPig.y < eachPotato.y + eachPotato.h &&
          eachPig.h + eachPig.y > eachPotato.y
        ) {
          eachPig.y = eachPig.y - 70;
          this.potatoReload.splice(indexPotato, 1);
          
        } else if (eachPig.y < 0 && eachPig.hadImpacted === false) {
          
          this.pigCage[indexPig].img.src = "./images/pig2.png";
          this.pigCage[indexPig].xDirection = 0;
          this.pigCage[indexPig].yDirection = 0;
          eachPig.y = 0
          let removePig = setTimeout(() => {
            
            this.pigCage.splice(indexPig, 1)
            this.score = this.score + 50
          }, 500);

          eachPig.hadImpacted = true

        }
      });
    });
  };

  potatoRabbitHit = () => {
    this.potatoReload.forEach((eachPotato, indexPotato) => {
      this.rabbitCage.forEach((eachRabbit, indexRabbit) => {
        if (
          eachRabbit.x < eachPotato.x + eachPotato.w &&
          eachRabbit.x + eachRabbit.w > eachPotato.x &&
          eachRabbit.y < eachPotato.y + eachPotato.h &&
          eachRabbit.h + eachRabbit.y > eachPotato.y
        ) {
          this.potatoReload.splice(indexPotato, 1);
          if (eachRabbit.hadImpacted === false){
          
          this.rabbitCage[indexRabbit].img.src = "./images/rabbit2.png";
          this.rabbitCage[indexRabbit].xDirection = 0;
          this.rabbitCage[indexRabbit].yDirection = 0;
          
          
          let removeRabbit = setTimeout(() => {
            this.rabbitCage.splice(indexRabbit, 1)
            this.score = this.score + 30
          }, 500);
          
          eachRabbit.hadImpacted = true
          }
        }
        })
      });
    };
  

  //   ************** ADD

  addPotato = () => {
    let newPotato = new Potato(this.humanClass.x + 40, this.humanClass.y - 5);

    this.potatoReload.push(newPotato);
  };

  addChicken = () => {
    if (this.frames % 120 === 0) {
      let rChickenX = Math.floor(Math.random() * -200);
      let rChickenY = Math.floor(Math.random() * 300);

      let newChicken = new Chicken(rChickenX, rChickenY);
      this.chickenCage.push(newChicken);
    }
  };

  addRabbit = () => {
    if (this.frames % 360 === 0) {
      // 6 secs

      let rRabbitX = Math.floor(Math.random() * (canvas.width - 550) + 600);
      let rRabbitY = Math.floor(Math.random() * (canvas.height - 300));

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

  //   ************** WOUND

  chickenHumanWound = () => {
    this.chickenCage.forEach((eachChicken) => {
      if (
        this.humanClass.x < eachChicken.x + eachChicken.w &&
        this.humanClass.x + this.humanClass.w > eachChicken.x &&
        this.humanClass.y < eachChicken.y + eachChicken.h &&
        this.humanClass.h + this.humanClass.y > eachChicken.y
      ) {
        this.gameOver();
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
        this.gameOver();
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
        this.gameOver();
      } else if (eachPig.y > canvas.height) {
        this.gameOver();
      }
    });
  };

  //   ************** DRAWS
  drawScore = () => {
    ctx.font = "30px Verdana";
    
    ctx.fillStyle = "orange";
    ctx.strokeText(`Score: `, canvas.width * 0.4, 50);
    ctx.fillText(`${this.score}`, canvas.width * 0.55, 50)
    
  };

  drawFloor = () => {
    ctx.drawImage(this.floor, 0, 0, canvas.width, canvas.height);
  };

  //   ************** GAME
  gameOver = () => {
    this.gameOn = false;
    canvas.style.display = "none";
    gameOverScreen.style.display = "grid";
    this.gameMusic.pause();
  };

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

    this.pigHumanWound();
    //          Rabbit addLoop
    this.addRabbit();
    this.rabbitCage.forEach((eachRabbit) => {
      eachRabbit.movementRabbit();
    });
    this.rabbitCage.forEach((eachRabbit) => {
      eachRabbit.wallCollideRabbit();
    });

    this.rabbitHumanWound();

    this.potatoChickenHit();
    this.potatoPigHit();
    this.potatoRabbitHit();

    //         Chicken addLoop
    this.addChicken();
    this.chickenCage.forEach((eachChicken) => {
      eachChicken.movementChicken();
    });
    this.chickenCage.forEach((eachChicken) => {
      eachChicken.wallCollideChicken();
    });

    this.chickenHumanWound();

    //                -- Potato Conditions & Loops --

    this.potatoReload.forEach((eachPotato) => {
      eachPotato.potatoDirection();
    });

    if (this.noShoot === false) {
      this.addPotato();
      this.noShoot = true;
    }

    // * 3. Dibujado de los elementos
    this.drawFloor();
    this.drawScore();
    this.humanClass.drawHuman();
    this.potatoReload.forEach((eachPotato) => {
      eachPotato.drawPotato();
    });

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
    if (this.gameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
