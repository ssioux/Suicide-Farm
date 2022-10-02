// * CHICKEN



class Chicken {
    constructor() {
      this.img = new Image();
      this.img.src = "./images/chicken.png";
      this.x = 10;
      this.y = 100;
      this.w = 60;
      this.h = 60;
      this.speed = 1
    }
    // CLASS METHODS
  
    // drawHuman
    drawChicken = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
  }



// CLASS METHODS

// drawChicken