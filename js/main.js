let app = {
    canvasWidth: 700,
    canvasHeight: 700
};

function renderCanvas () {
    app.canvas  = document.getElementById("mainCanvas");
	app.canvas.width = app.canvasWidth;
	app.canvas.height = app.canvasHeight;
	app.ctx = app.canvas.getContext('2d');
	app.ctx.fillStyle = "white";
}


function updateState () {
}

function draw () {
    renderCanvas();
    renderMaze();
}

function renderMaze () {
}

function loop(timestamp) {
    updateState()
    draw();
    requestAnimationFrame(loop)
}


function startGame () {
    requestAnimationFrame(loop)
}
