let app = {
    canvasWidth: 700,
    canvasHeight: 700
};

function load (){
    app.canvas  = document.getElementById("mainCanvas");
	app.canvas.width = app.canvasWidth;
	app.canvas.height = app.canvasHeight;
	app.ctx = app.canvas.getContext('2d');
	app.ctx.fillStyle = "white";
}
