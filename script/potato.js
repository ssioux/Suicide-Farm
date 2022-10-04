class Potato {

    constructor(humanPositionX, humanPositionY) {
        this.img = new Image();
        this.img.src = "./images/patata.png";
        this.x = humanPositionX;
        this.y = humanPositionY;
        this.w = 30;
        this.h = 30;
        this.speed = 6;
        this.yDirection = -4;
      }
      // CLASS METHODS
    
      drawPotato = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      };
    
      potatoDirection = () => {
        this.y = this.y + this.yDirection;
      };
    }