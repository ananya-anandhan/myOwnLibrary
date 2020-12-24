var fixedRect, movingRect,o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(100,100,50,20);
  o1.shapeColor = 'green';
  o1.debug = true;
  o2 = createSprite(100,400,30,40);
  o2.shapeColor = 'green';
 fixedRect.velocityX = -2;
 movingRect.velocityX = 2;
 o1.velocityY = 2;
 o2.velocityY = -2;

}

function draw() {
  background(0,0,0);  
  
 bounceoff(movingRect,fixedRect);
  
  drawSprites();
}






