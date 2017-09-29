var imgSrc1 = "imgs/player1.png";
var imgSrc2 = "imgs/player2.png";

var frame = 0;

/*
    x - indexed position of player
    y - indexed position of player
*/

class Player {
    constructor (keysDown) {
        this.x = 0;
        this.y = 0;
        this.keysDown = keysDown;
        this.sprite = new Sprite(imgSrc1, this.x, this.y, app.size, app.size);
    }

    getPosition () {
        return {
            x: this.sprite.x,
            y: this.sprite.y
        }
    }

    updateState() {
        if (!(frame % 10)) {
            if (this.keysDown['left'] || this.keysDown['a']) {
                if (this.x > 0 && this.isHorizontalMovePossible(this.x-1, this.y)) {
                    this.x--;
                }
            }
            if (this.keysDown['right'] || this.keysDown['d']) {
                if (this.isHorizontalMovePossible(this.x, this.y)) {
                    this.x++;
                }
            }
            if (this.keysDown['up'] || this.keysDown['w']) {
                if (this.y > 0 && this.isVerticalMovePossible(this.x, this.y-1)) {
                    this.y--;
                }
            }
            if (this.keysDown['down'] || this.keysDown['s']) {
                if (this.isVerticalMovePossible(this.x, this.y)) {
                    this.y++;
                }
            }
        }

        this.limitWithinCanvas();

        this.sprite.updatePosition(this.x * app.size, this.y * app.size);

        frame++;
        if (!(frame % 30)) {
            this.sprite.setImageSrc(this.sprite.getImageSrc().includes(imgSrc1) ? imgSrc2 : imgSrc1);
        }
    }

    isHorizontalMovePossible (x, y) {
        return maze.hori[y][x] === true;
    }

    isVerticalMovePossible (x, y) {
        return maze.vert[y][x] === true;
    }

    limitWithinCanvas () {
        // check if player is within limitations of canvasWidt
        if (this.x * app.size > app.canvasWidth - app.size) {
            this.x--;
            this.addBorder("right");
        }
        if (this.x * app.size < 0) {
            this.x = 0;
            this.addBorder("left");
        }

        if (this.y * app.size > app.canvasHeight - app.size) {
            this.y--;
            this.addBorder("down");
        }
        if (this.y * app.size < 0){
            this.y = 0;
            this.addBorder("up");
        }
    }

    addBorder (direction) {
        let borderClass = ""
        if (direction === "right") {
            borderClass = "borderRight";
        } else if (direction === "left") {
            borderClass = "borderLeft";
        } else if (direction === "up") {
            borderClass = "borderTop";
        } else if (direction === "down") {
            borderClass = "borderBottom";
        }
        app.canvas.className = borderClass;
        setTimeout(() => {
            app.canvas.classList.remove(borderClass);
        }, 500);
    }

    draw () {
<<<<<<< Updated upstream
        // this.print();
        this.sprite.draw();
    }

    // print () {
    //     console.log("x: " + this.x*app.size);
    //     console.log("y: " + this.y*app.size);
    //     console.log("  ");
    // }
=======
        this.sprite.draw();
    }

    print () {
        console.log("x: " + this.x);
        console.log("y: " + this.y);
        console.log("  ");
    }
>>>>>>> Stashed changes

}
