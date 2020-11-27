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
      //console.log("Game ->  // collision detected!");
      this.coin.moveCoin();
      this.score++;
      //console.log(this.score);
    }
    if (
      this.player.x < this.obstacle.x + this.obstacle.width &&
      this.player.x + this.player.width > this.obstacle.x &&
      this.player.y < this.obstacle.y + this.obstacle.width &&
      this.player.y + this.player.height > this.obstacle.y
    ) {
      // collision detected!
      //console.log("Game ->  // collision detected!");
      this.endGame();
      //console.log("dead");
    }
  }

  updateGame() {
    let ctx = document.querySelector('canvas').getContext('2d');
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
    this.player.color = 'white';
    this.score = 0;
    // h1 = document.querySelector("h1")
    // h1.innerText = "Game Over! Refresh to Restart"
    this.gameArea.endGameMessage();
    cancelAnimationFrame();
  }
}

let myPlayer = new Player(30, 30, 'purple', 200, 120, 3, 0, 0, 0.93, 0.1); //////////added friction and gravity values
let myGameArea = new GameArea();
let myCoin = new Coin(100, 75, 5, 0, 2 * Math.PI, 'orange');
let myObstacle = new Obstacle(30, 30, 'red', 0, 90, 3, 0, 0, 1, 0);

let myGame = new Game(myPlayer, myGameArea, myCoin, myObstacle);

myGame.startGame();
myGame.updateGame();
/////////////////////////////
