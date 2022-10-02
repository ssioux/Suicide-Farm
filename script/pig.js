// * PIG

class Pig {
    constructor() {
      this.img = new Image();
      this.img.src = "./images/evilpig.png";
      this.x = 370;
      this.y = 20;
      this.w = 100;
      this.h = 100;
      this.speed = 1
    }
    // CLASS METHODS
  
    // drawHuman
    drawPig = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
  }
  





// CLASS METHODS

// drawPig