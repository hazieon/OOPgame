class Game {
  constructor(player, gameArea, coin, obstacle) {
    this.player = player;
    this.gameArea = gameArea;
    this.coin = coin;
    this.score = 0;
    this.obstacle = obstacle;
  }

  startGame() {
    (function () {
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    })();

    this.gameArea.start();
    this.player.makePlayer();
    this.coin.makeCoin();
    this.obstacle.makePlayer();
    this.score = 0;
  }

  collisionCheck() {
    if (
      this.player.x < this.coin.x + this.coin.radius * 2 &&
      this.player.x + this.player.width > this.coin.x &&
      this.player.y < this.coin.y + this.coin.radius * 2 &&
      this.player.y + this.player.height > this.coin.y
    ) {
      // collision detected!
      console.log("Game ->  // collision detected!");
      this.coin.moveCoin();
      this.score++;
      console.log(this.score);
    }
  }

  updateGame() {
    let ctx = document.querySelector("canvas").getContext("2d");
    ctx.clearRect(0, 0, 480, 200); // added in
    myCoin.updateCoin();
    myPlayer.update();
    myObstacle.updateObstacle();
    myObstacle.moveObstacle();
    this.collisionCheck();
    this.gameArea.updateScore(this.score);
    requestAnimationFrame(() => this.updateGame());
  }

  endGame() {
    this.player.x = 200;
    this.player.y = 120;
    this.score = 0;
  }
}

let myPlayer = new Player(30, 30, "purple", 200, 120, 3, 0, 0, 0.93, 0.1); //////////added friction and gravity values
let myGameArea = new GameArea();
let myCoin = new Coin(100, 75, 5, 0, 2 * Math.PI, "orange");
let myObstacle = new Obstacle(30, 30, "red", 0, 90, 3, 1, 0, 1, 0);

let myGame = new Game(myPlayer, myGameArea, myCoin, myObstacle);

myGame.startGame();
myGame.updateGame();
/////////////////////////////
//let myCoin = new Player(15, 15, "blue", 100, 60, 0, 0, 0, 0, false);

// myGameArea.start();
// myPlayer.makePlayer();
///////////////////////////
//myCoin.makePlayer();

// runs update when we load our page

// window.addEventListener("load", function () {
//   myPlayer.update();
//   //myCoin.itemUpdate();
// });

// function playerKeyMovements(event) {
//     console.log("hello")
//     //myPlayer.movePlayerRight()
//     if(event.keyCode === 39) {
//        return myPlayer.movePlayerRight()
//     }
//     if(event.keyCode === 37) {
//         return myPlayer.movePlayerLeft()
//     }
// }

// document.addEventListener("keydown", playerKeyMovements
// )

// myGameArea.canvas.addEventListener("click", playerKeyMovements
// )
