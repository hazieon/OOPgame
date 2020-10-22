let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

//canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//platform
ctx.fillStyle = "grey";
ctx.fillRect(0, canvas.height/1.45, canvas.width, 500);

//Player
ctx.fillStyle = "white";
ctx.fillRect(700, canvas.height/1.75, 150, 100);