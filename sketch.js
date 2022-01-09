// MY OWN GAME-1. MAZE GAME. CAN YOU CROSS THIS GAME. CHECK THIS OUT.
var block1, block1_i, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var player1, player2;
var target1, target2;
var form, maze;
var timer = 60;

function preload() {
    back1 = loadImage("bg 1.jpg");
    // block1_i = loadImage("Stick image 1.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    form = new Form();

}

function draw() {
    background(back1);

    form.display();
    // if (keyDown("space")) { 
    // maze.player.velocityY = -5;
    // }

    if (frameCount % 60 == 0 && timer > 0) {
        // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer--;
        console.log(frameCount);
    }
    text("Timer: " + timer, windowWidth - 200, 50)
}

































































































































































































