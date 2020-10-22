// Add states isAlive, name and canvas Location.
// Add methods kill(), getLocation()?, setName() and moveLocation()

class Player{
constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  makePlayer() {
    let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  movePlayerRight() {
      this.x+= 10;
      let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  movePlayerLeft() {
    this.x-= 10;
    let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
}
}






// //Player
// ctx.fillStyle = "white";
// ctx.fillRect(700, canvas.height/1.75, 150, 100);
