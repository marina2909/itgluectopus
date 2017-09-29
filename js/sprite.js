class Sprite {

    constructor (imgSrc, x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw () {
        app.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    setImageSrc (imgSrc) {
        this.img.src = imgSrc;
    }

    getImageSrc () {
        return this.img.src;
    }

    updatePosition (x, y) {
        this.x = x;
        this.y = y;
    }

}
