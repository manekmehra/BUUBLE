
var player
var enemy,enemy1,enemy2,enemyGrp
function setup() {
player = new Ball
enemy = new Enemy
enemy1 = new Enemy
enemy2 = new Enemy
}

function draw() {
createCanvas(400,400)
if (keyDown("RIGHT_ARROW")){
    player.x = player.x+10
}
if (keyDown("LEFT_ARROW")){
    player.x = player.x-10
}

}



