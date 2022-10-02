// * RABBIT



class Rabbit {
    constructor() {
      this.img = new Image();
      this.img.src = "./images/rabbit.png";
      this.x = 550;
      this.y = 200;
      this.w = 40;
      this.h = 40;
      this.speed = 1
    }
    // CLASS METHODS
  
    // drawHuman
    drawRabbit = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
  }



// CLASS METHODS

// drawRabbit