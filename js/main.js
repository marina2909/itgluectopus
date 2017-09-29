let app = {
    canvasWidth: 780,
    canvasHeight: 780,
    size: 60,
	totalTime: 45,
    gameOver: false
};

let maze,
	keysDown,
    player,
    documents,
    points=0;

function renderCanvas () {
    app.canvas = document.getElementById("mainCanvas");
	app.canvas.width = app.canvasWidth;
	app.canvas.height = app.canvasHeight;
	app.ctx = app.canvas.getContext('2d');
	app.ctx.fillStyle = "white";
}

function updateState (time) {
    player.updateState();
    collectPoints();

    setTime(time);
    if (app.gameOver) {
        //alert("GameOver! Total points " + points);
    } else {
        requestAnimationFrame(loop);
    }
}

function setTime (time) {
    lastFrameTime = time;
    if (Math.round((lastFrameTime - startFrame)/1000) > app.totalTime) {
        app.gameOver = true;
    }
    let timeID = document.getElementById("time");
    var remainingTime = (app.totalTime - Math.round((lastFrameTime - startFrame)/1000));
    timeID.innerHTML = "Remaining time: " + (remainingTime > 0 ? remainingTime : 0);
}

function draw () {
    renderCanvas();
    maze.renderMaze();
    player.draw();
    documents.draw();
    if (app.gameOver) {
        app.ctx.font = "40px krakman";
        app.ctx.fillStyle = "red";
        app.ctx.textAlign = "center";
        app.ctx.fillText("Game Over! Total points: " + points, app.canvasWidth/2, app.canvasHeight/2);
        app.ctx.fillText("Click Play to try again!", app.canvasWidth/2, app.canvasHeight/2 + 50);
    }
}

function loop(time) {
    updateState(time);
    draw();
}


function startGame () {
	maze = new Maze(app.canvasHeight/app.size, app.canvasWidth/app.size);
    points = 0;
    document.getElementById("points").innerHTML = "Points Collected:  " + points;
    app.gameOver = false;
    startFrame = performance.now();
    lastFrame = performance.now();
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
            document.getElementById("points").innerHTML = "Points Collected:  " + points;
        }
    }
}

function load () {
	renderCanvas();
	var img = new Image();
	img.onload = function () {
		app.ctx.drawImage(img, (app.canvasWidth-585)/2, (app.canvasHeight-585)/2, 580, 585);
        app.ctx.fillStyle = "green";
        app.ctx.font = "30px krakman";
        app.ctx.textAlign = "center";
        app.ctx.fillText("Press Play to start the game!", app.canvasWidth/2, app.canvasHeight - 50);
	}
	img.src = "imgs/player1.png";
}
