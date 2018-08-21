//

class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;

    }

    update(dt) {
        this.outOfBoundsX = this.x > 5;
        this.outOfBoundsY = this.y < 1;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }

    checkCollide(gameEntity) {
        if (this.y === gameEntity.y) {
            if (this.x >= gameEntity.x - 0.4 && this.x <= gameEntity.x + 0.4) {
                return true;    //"collision" set to within 0.4 blocks of player/enemy
            }
        } else {    //player and enemy have to be on same y position to "collide"
            return false;
        }

    }
};

class Player extends Entity {
    constructor() {
        super();
        this.sprite += 'char-horn-girl.png';
    }

    handleInput(input) {
        switch(input) {
            case 'left':    //if player at x starting point (0), do not move left
                this.x = this.x > 0 ? this.x - 1 : this.x;  //increment/decrement of 1 works with "block" movement
                break;
            case 'up':
                this.y = this.y > 0 ? this.y - 1 : this.y;
                break;
            case 'right':   //if player is at last x block, do not move right
                this.x = this.x < 4 ? this.x + 1 : this.x;
                break;
            case 'down':
                this.y = this.y < 5 ? this.y + 1 : this.y;
                break;
            default:    //for any other keypress
                break;

        }
    }
}

class Enemy extends Entity {
    constructor(x, y) {
        super();
        this.x = x; //These can be modified so that enemy entities start at different places
        this.y = y;
        this.sprite += 'enemy-bug.png';
    }

    update(dt) {
        super.update();
        if(this.outOfBoundsX) {
            this.x = -1;    //makes Enemy look like it "starts" off-canvas
        } else {
            this.x += dt;   //This can be modified so that different enemies move at different paces
        }
    }
}
