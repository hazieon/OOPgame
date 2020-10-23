// Add states inProgress and score, player, canvas (platform),
// Add methods start() and changeScore(), move player?, define canvas,

class Coin {
  constructor(x, y, radius, startAngle, endAngle, color) {
    //this.width = width;
    // this.height = height;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.color = color;
  }

  makeCoin() {
    let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?

    //ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.fill();
    ctx.stroke();

    console.log("Coin created");
  }

  moveCoin() {
    this.x = Math.floor(Math.random() * 470) + 10;
    this.y = Math.floor(Math.random() * 180) + 10;
  }

  updateCoin() {
    let ctx = document.querySelector("canvas").getContext("2d");
    //ctx.clearRect(0, 0, 480, 200); // added in

    //ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.fill();
    ctx.stroke();
  }
}
