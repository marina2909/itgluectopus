let app = {
    canvasWidth: 700,
    canvasHeight: 700,
    size: 70
};
const coords = {
	hori: [],
	vert: []
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
    //renderMaze();
    player.draw();
}

function renderMaze(maze) {
	for (let i=0; i<coords.hori.length; i++) {
		app.ctx.beginPath();
		app.ctx.moveTo(coords.hori[i].x*app.size, coords.hori[i].y*app.size);
		app.ctx.lineTo(coords.hori[i].x*app.size+app.size, coords.hori[i].y*app.size);
		app.ctx.stroke();
	}
	for (let i=0; i<coords.vert.length; i++) {
		app.ctx.beginPath();
		app.ctx.moveTo(coords.vert[i].x*app.size, coords.hori[i].y*app.size);
		app.ctx.lineTo(coords.vert[i].x*app.size, coords.hori[i].y*app.size+app.size);
		app.ctx.stroke();
	}
}

function generateMaze (x, y) {
	var n = x * y - 1;
	var hori = [], vert = []; // horizontal and vertical openings
	for (var j= 0; j<x+1; j++) hori[j]= [];
	for (var j= 0; j<x+1; j++) vert[j]= [];

	var here = [Math.floor(Math.random()*x), Math.floor(Math.random()*y)],
	    path = [here],
	    unvisited = [];

	for (let j = 0; j<x+2; j++) {
		unvisited[j] = [];
		for (let k= 0; k<y+1; k++)
			unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
	}

	// path finding
	while (n > 0) {
		var potential = [[here[0]+1, here[1]], [here[0],here[1]+1],
		    [here[0]-1, here[1]], [here[0],here[1]-1]];
		var neighbors = [];
		for (let j = 0; j < 4; j++) {
			if (unvisited[potential[j][0]+1][potential[j][1]+1]) {
				neighbors.push(potential[j]);
			}
		}
		if (neighbors.length) {
			n--;
			next= neighbors[Math.floor(Math.random()*neighbors.length)];
			unvisited[next[0]+1][next[1]+1]= false;
			if (next[0] == here[0]) {
				hori[next[0]][(next[1]+here[1]-1)/2] = true;
			} else {
				vert[(next[0]+here[0]-1)/2][next[1]] = true;
			}
			path.push(here = next);
		} else {
			here = path.pop();
		}
	}
	return {
		x: x,
		y: y,
		hori: hori,
		vert: vert
	};
}

function convertToCoords(m) {
	for (var j= 0; j<m.x; j++) {
		for (var k=0; k<m.y; k++) {
			if (m.vert[j][k]) {
				coords.hori.push({
					x: k,
					y: j+1
				});
			}
		}
		for (var k=0; k<m.y; k++)
			if (m.hori[j][k]) {
				coords.vert.push({
					x: k+1,
					y: j
				});
			}
	}
}
// TODO: remove this
function display(m) {
	var text= [];
	for (var j= 0; j<m.x*2+1; j++) {
		var line= [];
		if (0 == j%2)
			for (var k=0; k<m.y*4+1; k++)
				if (0 == k%4) {
					line[k]= '+';
				} else {
					if (j>0 && m.vert[j/2-1][Math.floor(k/4)]) {
						line[k]= ' ';
					} else {
						line[k]= '-';
					}
				}
		else
			for (var k=0; k<m.y*4+1; k++)
				if (0 == k%4) {
					if (k>0 && m.hori[(j-1)/2][k/4-1]) {
						line[k]= ' ';
					} else {
						line[k]= '|';
					}
				} else {
					line[k]= ' ';
				}
		if (0 == j) line[1]= line[2]= line[3]= ' ';
		if (m.x*2-1 == j) line[4*m.y]= ' ';
		text.push(line.join('')+'\r\n');
	}
 	document.getElementById("hello").innerHTML = text.join('');
}

function loop(timestamp) {
    updateState();
    draw();
    requestAnimationFrame(loop)
}


function startGame () {
	convertToCoords(generateMaze(8, 11));
    keysDown = new KeysDown();
    player = new Player(keysDown.getKeys());
    requestAnimationFrame(loop)
}
