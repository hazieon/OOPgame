// Add states inProgress and score, player, canvas (platform),
// Add methods start() and changeScore(), move player?, define canvas,

class Coin {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  makeCoin() {
    let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    console.log("Coin created");
  }

  updateCoin() {
    let ctx = document.querySelector("canvas").getContext("2d");
    //ctx.clearRect(0, 0, 480, 200); // added in
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
