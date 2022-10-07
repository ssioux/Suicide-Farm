# SUICIDE FARM


## [See Suicide Farm](https://ssioux.github.io/Suicide-Farm/)


# Description

You dropped a liquid for an experiment with animals, and they transformed more big and strong adopting a human form.

You will have to save the Earth, not letting scape the Evil Animals out of the barnyard or not letting them wound you. You have three lives. Try to survive to get more points.

# Main Functionalities

- Player movement, up, right, down, left.
- Throwing potatoes up (or foward in playerPOV) you can kill enemies.
- Player die when lives are 0.
- Player lose if some pig reach the door.
- Enemies apear randomly.

# Backlog Functionalities

- When some enemie is hitted by a potatoe the enemie stop opening the mouth like is dying.
- The pig goes back if is hitted by a potato and dyes if you back it up against the wall.
- Image with the number of lives.

# Proyect Structure


## main.js

    - Global variables
    - startGame
    - restartGame
    - addEventListener's

## game.js

    - Game(){}
    - scoreGameOverScreen()
    - removingPotatoes()

    - potatoChickenHit()
    - potatoPigHit()
    - potatoRabbitHit()
    - potatoStrongPigHit()

    - addPotato()
    - addChicken()
    - addRabbit()
    - addPig()
    - addStrongPig()

    - strongPigHumanWound()
    - pigHumanWound()
    - ChickenHumanWound()
    - rabbitHumanWound()

    - drawLives()
    - drawScore()
    - drawFloor()
    
    - gameOver()
    - gameLoop()

## human.js 

    - constructor(){this.img, this.img.src, this.x, this.y, this.w, this.h, this.speed, this.lives}
    - drawhuman()

# chicken.js 

    - constructor(){this.img, this.img.src, this.x, this.y, this.w, this.h, this.hadImpacted, this.xDirection, this.yDirection}
    - drawChicken()
    - collideWall()
    - movementChicken()

# rabbit.js 

    - constructor(){this.img, this.img.src, this.x, this.y, this.w, this.h, this.hadImpacted, this.xDirection, this.yDirection}
    - drawRabbit()
    - collideWall()
    - movementChicken()

# pig.js 

    - constructor(){this.img, this.img.src, this.x, this.y, this.w, this.h, this.hadImpacted, this.yDirection}
    - drawPig()
    - movementChicken()

# strongPig.js

    - constructor(){this.img, this.img.src, this.x, this.y, this.w, this.h, this.hadImpacted, this.yDirection}
    - drawStrongPig()
    - movementStrongPig()

# potato.js

    - constructor(){this.img, this.img.src, this.x, this.y, this.w, this.h, this.hadImpacted, this.yDirection}
    - drawPotato()
    - potatoDirection()



# States and Transitions

- Start Screen, Game Screen, Score Screen.

# Extra Links

### GitHub
[Repository](https://github.com/ssioux/Suicide-Farm)
[Game](https://ssioux.github.io/Suicide-Farm/)

### Slides
[Link](https://docs.google.com/presentation/d/1J6bgF6gsY3GZVKtexk8bQrepqMuEZbPD5bTpUPXfAZk/edit#slide=id.p)