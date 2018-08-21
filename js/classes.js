//

class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }
};

class Player extends Entity {
    constructor() {
        super();
        this.sprite += 'char-horn-girl.png';
    }
}

class Enemy extends Entity {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.sprite += 'enemy-bug.png';
    }
}
