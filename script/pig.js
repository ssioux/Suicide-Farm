// * PIG

class Pig {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/pig.png";
    this.x = 370;
    this.y = 0;
    this.w = 100;
    this.h = 100;
    this.hasImpacted = false
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
