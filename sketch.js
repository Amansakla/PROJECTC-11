var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImage1=loadAnimation("ship-1.png","ship-2.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.5;

  //create ship sprite
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImage1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);

  drawSprites();
}
