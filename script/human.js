// * HUMAN

class Human {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/human.png";
    this.x = 300;
    this.y = 590;
    this.w = 60;
    this.h = 50;
    this.speed = 30;
    this.lives = 3;
  }
  // CLASS METHODS

  // drawHuman
  drawHuman = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
