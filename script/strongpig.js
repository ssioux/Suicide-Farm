// * SUPER PIG

class StrongPig {
    constructor() {
      this.img = new Image();
      this.img.src = "./images/moto-pig.png";
      this.x = 200;
      this.y = 20;
      this.w = 100;
      this.h = 100;
  
      this.yDirection = 1;
    }
    // CLASS METHODS
  
    drawPig = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
  
    movementPig = () => {
      this.y = this.y + this.yDirection;
    };
  }
  