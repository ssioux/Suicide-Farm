// * HUMAN

class Human {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/human.png";
    this.x = 270;
    this.y = 620;
    this.w = 60;
    this.h = 50;
  }
  // CLASS METHODS

  // drawHuman
  drawHuman = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
