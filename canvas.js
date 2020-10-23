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

  updateScore(score) {
    let ctx = this.context;
    ctx.font = "30px Consolas";
    ctx.fillText(score, 10, 50);
  }

  endGameMessage() {
    let ctx = this.context;
    ctx.font = "50px Consolas";
    ctx.strokeText("Game Over!", 120, 130);
  }
}
