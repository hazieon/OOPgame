// (function () {
//   var requestAnimationFrame =
//     window.requestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.msRequestAnimationFrame;
//   window.requestAnimationFrame = requestAnimationFrame;
// })();

// let myGameArea = new GameArea();
// let myPlayer = new Player(30, 30, "green", 200, 120, 3, 0, 0, 0.93, 0.2); //////////added friction and gravity values
// /////////////////////////////
// //let myCoin = new Player(15, 15, "blue", 100, 60, 0, 0, 0, 0, false);

// myGameArea.start();
// myPlayer.makePlayer();
// ///////////////////////////
// //myCoin.makePlayer();

// //let canvas = document.querySelector("canvas")

// function playerKeyMovements(event) {
//   console.log("hello");
// }

// // runs update when we load our page

// window.addEventListener("load", function () {
//   myPlayer.update();
// //   //myCoin.itemUpdate();
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
