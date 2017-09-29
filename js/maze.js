const coords = {
	hori: [],
	vert: []
};
let maze = {};

function renderMaze(maze) {
	for (let i=0; i<maze.x; i++) {
		for (let j=0; j<maze.y; j++) {
			if (maze.vert[i][j] === true) {
			} else {
				app.ctx.beginPath();
				app.ctx.moveTo(j*app.size, (i+1)*app.size);
				app.ctx.lineTo((j+1)*app.size, (i+1)*app.size);
				app.ctx.stroke();
			}
		}
	}
	for (let i=0; i<maze.x; i++) {
		for (let j=0; j<maze.y; j++) {
			if (maze.hori[i][j] === true) {
			} else {
				app.ctx.beginPath();
				app.ctx.moveTo((j+1)*app.size, i*app.size);
				app.ctx.lineTo((j+1)*app.size, (i+1)*app.size);
				app.ctx.stroke();
			}
		}
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