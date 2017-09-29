let app = {
    canvasWidth: 800,
    canvasHeight: 800,
    size: 40
};
let maze = generateMaze(app.canvasHeight/app.size, app.canvasWidth/app.size);

let keysDown, player, documents, points=0;

function renderCanvas () {
    app.canvas  = document.getElementById("mainCanvas");
	app.canvas.width = app.canvasWidth;
	app.canvas.height = app.canvasHeight;
	app.ctx = app.canvas.getContext('2d');
	app.ctx.fillStyle = "white";
}

function updateState () {
    player.updateState();
    collectPoints();
}

function draw () {
    renderCanvas();
    renderMaze(maze);
    player.draw();
    documents.draw();
}

function loop(timestamp) {
    updateState();
    draw();
    requestAnimationFrame(loop)
}


function startGame () {
    keysDown = new KeysDown();
    player = new Player(keysDown.getKeys(), maze);
    documents = new Documents();
    requestAnimationFrame(loop)
}

function collectPoints () {
    var playerPosition = player.getPosition();
    for (let i=0; i<documents.list.length; i++) {
        if (playerPosition.x === documents.list[i].x && playerPosition.y === documents.list[i].y) {
            points++;
            documents.list.splice(i, 1);
            document.getElementById("points").innerHTML = "Points collected  " + points;
        }
    }
}
