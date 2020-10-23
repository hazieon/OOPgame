class Game {
  constructor(player, gameArea, coin) {
    this.player = player;
    this.gameArea = gameArea;
    this.coin = coin;
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
  }
  updateGame() {
    let ctx = document.querySelector("canvas").getContext("2d");
    ctx.clearRect(0, 0, 480, 200); // added in
    myCoin.updateCoin();
    myPlayer.update();

    requestAnimationFrame(() => this.updateGame());
  }
}

let myPlayer = new Player(30, 30, "green", 200, 120, 3, 0, 0, 0.93, 0.2); //////////added friction and gravity values
let myGameArea = new GameArea();
let myCoin = new Coin(10, 10, "gold", 100, 60);

let myGame = new Game(myPlayer, myGameArea, myCoin);

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
