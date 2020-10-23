class GameArea {
  constructor() {
    this.canvas = document.querySelector("canvas");
  }
  start() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");

    this.context.fillStyle = "black";
    this.context.fillRect(0, 200, 480, 70);
    console.log("hi");
  }
}

//Add state isSet.
// Add method draw.
//

//setting canvas to be relative to window size
// let heightRatio = 1.5;
// canvas.height = canvas.width * heightRatio;
//canvas
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.fillStyle = "black";
// ctx.fillRect(0, 0, canvas.width, canvas.height);
