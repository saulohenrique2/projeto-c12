var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png")
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,400)
  path.addImage ("movendo",pathImg)
  path.velocityY=-2
  console.log(path.x)
 
  path.scale=1;

  boy = createSprite(200,20s0,50,40)
  boy.addAnimation ("correndo",boyImg)
boy.scale= 0.5;
 

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 8;
  
  boy.x = World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  if (path.y<0)
  {
    path.x = path.width/2;
  }
  drawSprites();
}
