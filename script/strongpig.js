// * SUPER PIG

class StrongPig {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/moto-pig.png";
    this.x = 100;
    this.y = 20;
    this.w = 100;
    this.h = 100;
    this.hadImpacted = false;

    this.yDirection = 4;
  }
  // CLASS METHODS

  drawStrongPig = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  movementStrongPig = () => {
    this.y = this.y + this.yDirection;
  };
}
