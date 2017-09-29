var srcDoc1 = "imgs/document.png";
var srcDoc2 = "imgs/folder.png";
var srcDoc3 = "imgs/lock.png";
class Documents {
    constructor() {
        this.generate();
    }

    generate () {
        this.list = [];
        let sprite1 = new Sprite(srcDoc1, 1 * app.size, 1 * app.size, app.size, app.size);
        let sprite2 = new Sprite(srcDoc2, 5 * app.size, 8 * app.size, app.size, app.size);
        let sprite3 = new Sprite(srcDoc3, 8 * app.size, 9 * app.size, app.size, app.size);
        let sprite4 = new Sprite(srcDoc1, 4 * app.size, 4 * app.size, app.size, app.size);
        let sprite5 = new Sprite(srcDoc2, 1 * app.size, 9 * app.size, app.size, app.size);
        let sprite6 = new Sprite(srcDoc3, 9 * app.size, 1 * app.size, app.size, app.size);
        this.list.push(sprite1);
        this.list.push(sprite2);
        this.list.push(sprite3);
        this.list.push(sprite4);
        this.list.push(sprite5);
        this.list.push(sprite6);
    }

    draw () {
        for (let doc of this.list) {
            doc.draw();
        }
    }
}
