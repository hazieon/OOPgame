let myGameArea = new GameArea();
let myPlayer = new Player(30, 30, "green", 200, 120);


myGameArea.start();
myPlayer.makePlayer();

//let canvas = document.querySelector("canvas")

function playerKeyMovements(event) {
    console.log("hello")
    //myPlayer.movePlayerRight()
    if(event.keyCode === 39) {
       return myPlayer.movePlayerRight()
    }
    if(event.keyCode === 37) {
        return myPlayer.movePlayerLeft()
    }
}

document.addEventListener("keydown", playerKeyMovements
)

myGameArea.canvas.addEventListener("click", playerKeyMovements
)

