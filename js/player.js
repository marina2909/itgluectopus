var imgSrc1 = "imgs/player1.png";
var imgSrc2 = "imgs/player2.png";

var frame = 1;

class Player {
    constructor (keysDown) {
        this.x = 0;
        this.y = 0;
        this.keysDown = keysDown;
        this.sprite = new Sprite(imgSrc1, this.x, this.y, app.size, app.size);
    }

    updateState() {
        if (frame % 25) {
            return;
        }

        if (this.keysDown['left']){
            this.x += -app.size;
	    }
    	if (this.keysDown['right']){
    		this.x += app.size;
    	}
    	if (this.keysDown['up']){
    		this.y += -app.size;
    	}
    	if (this.keysDown['down']){
    		this.y += app.size;
    	}

	    if (this.x > app.canvasWidth) this.x = app.canvasWidth - app.size;
        if (this.x < 0) this.x = 0;

        if (this.y > app.canvasHeight) this.y = app.canvasHeight - app.size;
        if (this.y < 0) this.y = 0;

        this.sprite.updatePosition(this.x, this.y);
    }

    draw () {
        frame++;
        if (!(frame % 30)) {
            this.sprite.setImageSrc(this.sprite.getImageSrc().includes(imgSrc1) ? imgSrc2 : imgSrc1);
        }
        this.sprite.draw();
    }

    print () {
        console.log("x: " + this.x);
        console.log("y: " + this.y);
        console.log("  ");
    }

}
