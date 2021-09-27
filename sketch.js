var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg=loadAnimation("sea.png");

  shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  
}

function setup(){
  createCanvas(400,400);
  background("sea.png",);

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background("blue");
  
 
  sea.velocityX = 2;
  sea.velocityX = -2;
 
 
    
  drawSprites();
}
