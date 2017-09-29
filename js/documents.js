var srcDoc1 = "imgs/document.png";
var srcDoc2 = "imgs/folder.png";
var srcDoc3 = "imgs/lock.png";
class Documents {
    constructor() {
        this.generate();
    }

    generate () {
        this.documents = [];
        let sprite1 = new Sprite(srcDoc1, 1 * app.size, 1 * app.size, app.size, app.size);
        let sprite2 = new Sprite(srcDoc2, 5 * app.size, 8 * app.size, app.size, app.size);
        let sprite3 = new Sprite(srcDoc3, 8 * app.size, 9 * app.size, app.size, app.size);
        let sprite4 = new Sprite(srcDoc1, 4 * app.size, 4 * app.size, app.size, app.size);
        let sprite5 = new Sprite(srcDoc2, 1 * app.size, 9 * app.size, app.size, app.size);
        let sprite6 = new Sprite(srcDoc3, 9 * app.size, 1 * app.size, app.size, app.size);
        this.documents.push(sprite1);
        this.documents.push(sprite2);
        this.documents.push(sprite3);
        this.documents.push(sprite4);
        this.documents.push(sprite5);
        this.documents.push(sprite6);
    }

    draw () {
        for (let doc of this.documents) {
            doc.draw();
        }
    }
}
