var fixedRect,movingRect,gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 30);
  movingRect = createSprite(300,400,30,80);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
  fixedRect.shapeColor = "magenta";
  movingRect.shapeColor = "magenta";
  gameObject1.shapeColor = "yellow";
  gameObject2.shapeColor = "yellow";
  gameObject3.shapeColor = "yellow";
  gameObject4.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;


if(isTouching(movingRect,gameObject1)){
  gameObject1.shapeColor = "cyan";
  movingRect.shapeColor = "cyan";
}

else{
  gameObject1.shapeColor = "yellow";
  movingRect.shapeColor = "magenta";
}
  
  drawSprites();
}

