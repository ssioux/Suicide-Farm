// * RABBIT



class Rabbit {
    constructor(xParam, yParam) {
      this.img = new Image();
      this.img.src = "./images/rabbit.png";
      this.x = xParam;
      this.y = yParam;
      this.w = 40;
      this.h = 40;
      this.xDirection = -1
      this.yDirection = -1
      
    }
    // CLASS METHODS
  
    // draw
    drawRabbit = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };

    movementRabbit = () => {
      this.x = this.x + (this.xDirection * 3)
      this.y = this.y + (this.yDirection * 3)
    }

    wallCollideRabbit = () => {
      
      if (this.y < 0){
        this.yDirection = 1
      } else if (this.x < 0) {
        this.xDirection = 1
       } else if (this.y > canvas.height - this.h){
         this.yDirection = -1
       } else if (this.x > canvas.width - this.w){
         this.xDirection = -1
    }
  }
}



