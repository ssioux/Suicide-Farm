// * CHICKEN

class Chicken {
  constructor(xParam, yParam) {
    this.img = new Image();
    this.img.src = "./images/chicken.png";
    this.x = xParam;
    this.y = yParam;
    this.w = 60;
    this.h = 60;
    this.hasImpacted = false
    

    this.xDirection = 1
    this.yDirection = 1
  }
  // CLASS METHODS

  // draw
  drawChicken = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  movementChicken = () => {
    this.x = this.x + (this.xDirection * 2);
    this.y = this.y + (this.yDirection * 2);
  };

  wallCollideChicken = () => {
    if (this.y < 0) {
      this.yDirection = 1;
    } else if (this.x < 0) {
      this.xDirection = 1;
    } else if (this.y > canvas.height - this.h) {
      this.yDirection = -1;
    } else if (this.x > canvas.width - this.w) {
      this.xDirection = -1;
    }
  };
}
