let app = {
    canvasWidth: 700,
    canvasHeight: 700,
    size: 70
};

let keysDown, player;

function renderCanvas () {
    app.canvas  = document.getElementById("mainCanvas");
	app.canvas.width = app.canvasWidth;
	app.canvas.height = app.canvasHeight;
	app.ctx = app.canvas.getContext('2d');
	app.ctx.fillStyle = "white";
}


function updateState () {
    player.updateState();
}

function draw () {
    renderCanvas();
    renderMaze();
    player.draw();
}

function renderMaze () {
}

function loop(timestamp) {
    updateState();
    draw();
    requestAnimationFrame(loop)
}


function startGame () {
    keysDown = new KeysDown();
    player = new Player(keysDown.getKeys());
    requestAnimationFrame(loop)
}
