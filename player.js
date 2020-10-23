// Add states isAlive, name and canvas Location.
// Add methods kill(), getLocation()?, setName() and moveLocation()

// creates keys array
// adds event listenters to body to for keydown and keyup
// checks code of keyevent and adds false or true to keys array
let keys = [];

document.body.addEventListener("keydown", function (event) {
  keys[event.code] = true;
});

document.body.addEventListener("keyup", function (event) {
  keys[event.code] = false;
});

class Player {
  constructor(
    width,
    height,
    color,
    x,
    y,
    speed,
    velX,
    velY,
    friction,
    gravity
  ) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.velX = velX;
    this.velY = velY;
    /////jump and friction and gravity
    this.jump = false;
    this.friction = friction;
    this.gravity = gravity;
  }
  makePlayer() {
    let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    console.log("Player created");
  }

  // itemUpdate() {
  //   let ctx = document.querySelector("canvas").getContext("2d");
  //   ctx.clearRect(this.x, this.y, this.width, this.height);
  //   ctx.fillStyle = this.color;
  //   ctx.fillRect(this.x, this.y, this.width, this.height);

  //   requestAnimationFrame(() => this.update());
  // }

  update() {
    // up arrow

    if (keys.ArrowUp) {
      //38if(this.jump=false){ }
      console.log("arrow up");
      if (!this.jump) {
        this.jump = true;
        this.velY = -this.speed * 2;
        console.log(keys);
      }
    }

    // right arrow
    if (keys.ArrowRight) {
      if (this.velX < this.speed) {
        this.velX++;
        console.log("right");
      }
    }

    // left arrow
    if (keys.ArrowLeft) {
      if (this.velX > -this.speed) {
        this.velX--;
        console.log("left");
      }
    }

    this.velX *= this.friction;
    this.velY += this.gravity;

    //moves player side to side
    this.x += this.velX;
    //moves player up and down?
    this.y += this.velY;

    // if (player.x >= width - player.width) {
    //   player.x = width - player.width;
    // } else if (player.x <= 0) {
    //   player.x = 0;
    // }
    // if (player.y >= height - player.height) {
    //   player.y = height - player.height;
    //   player.jumping = false;
    // }

    // makes boundaries
    if (this.x >= 480 - this.width) {
      this.x = 480 - this.width;
    } else if (this.x <= 0) {
      this.x = 0;
    }
    if (this.y >= 270 - this.height - 70) {
      //console.log("too high");
      this.y = 270 - this.height - 70;
      this.jump = false;
    }

    let ctx = document.querySelector("canvas").getContext("2d");

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // how we clear previous drawings?

    //console.log(keys);
  }
}

//   movePlayerRight() {
//       this.x+= 10;
//       let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
//   movePlayerLeft() {
//     this.x-= 10;
//     let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
//       ctx.fillStyle = this.color;
//       ctx.fillRect(this.x, this.y, this.width, this.height);
// }
// }

// //Player
// ctx.fillStyle = "white";
// ctx.fillRect(700, canvas.height/1.75, 150, 100);

class Obstacle extends Player {
  constructor(
    width,
    height,
    color,
    x,
    y,
    speed,
    velX,
    velY,
    friction,
    gravity
  ) {
    super(width, height, color, x, y, speed, velX, velY, friction, gravity);
  }
  moveObstacle() {
    //if at far left, move far right
    console.log("in move obs");
    if (this.x - this.width / 4 <= 0) {
      this.velX = 2;
      console.log("left");
    }
    if (this.x + this.width >= 480) {
      this.velX = -2;
      console.log("right");
    }
    //if far right, move far left
  }
  updateObstacle() {
    // makes boundaries
    // if (this.x >= 480 - this.width) {
    //   this.x = 480 - this.width;
    // } else if (this.x <= 0) {
    //   this.x = 0;
    // }

    //moves player side to side
    this.x += this.velX;

    let ctx = document.querySelector("canvas").getContext("2d");

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // how we clear previous drawings?

    //console.log(keys);
  }
}
