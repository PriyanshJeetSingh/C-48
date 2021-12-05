var wall1;
var player


function preload(){
  boyImg = loadImage("runN.png");
  treasureImg = loadImage("treasure.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  

//creating the player sprite

player = createSprite(50, 50, 50, 20);
player.addImage("boy", boyImg)
player.scale = 0.1
player.debug = true;


wall1 = createSprite(300, 100, 50, 250);
  //wall1.addImage("brick1", wallImg1)
  wall1.scale = 0.7;
  wall1.shapeColor = "red"

  wall2 = createSprite(535, 435, 250, 25);
  //wall2.addImage("brick", wallImg)
  wall2.scale = 0.7
  wall2.shapeColor = "red"
  
  wall3 = createSprite(200, 330, 200, 30);
  //wall3.addImage("brick1", wallImg1)
  wall3.shapeColor = "red"

  wall5 = createSprite(200, 600, 200, 30)
  wall5.shapeColor = "red"


  wall4 = createSprite(511, 600, 5, 250)
  wall4.shapeColor = "red"

  treasure = createSprite(windowWidth - 50, windowHeight - 50, 50, 50)
  treasure.addImage("treasure", treasureImg)
  treasure.scale = 0.3

}

function draw() {
  background("yellow");

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")){
 player.y = player.y+30
}

if(keyDown("LEFT_ARROW")){
  player.x = player.x-30
 }

 if(keyDown("RIGHT_ARROW")){
  player.x = player.x+30
 }

 if(player.isTouching(wall1) || player.isTouching(wall2) || player.isTouching(wall3) || player.isTouching(wall4)
  || player.isTouching(wall5))
  {
    player.x = 50;
    player.y = 50;
 }

 if(player.isTouching(treasure)){
  
  textSize(100)
  text("Well Done!!", windowWidth/2, windowHeight/2)
  
 }
  
drawSprites();

}
