var movingRect, fixedRect;
var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(600,500);
  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "blue";
  fixedRect = createSprite(400,250, 40,80);
  fixedRect.shapeColor = "green";

  rect1 = createSprite(100,400,50,50);
  rect2 = createSprite(200,400,50,50);
  rect3 = createSprite(300,400,50,50);
  rect4 = createSprite(400,400,50,50);
  rect1.shapeColor = "yellow";
  rect2.shapeColor = "cyan";
  rect3.shapeColor = "orange";
  rect4.shapeColor = "pink";
}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  function bounceOff(obj1, obj2) {
    if(obj1.x - obj2.x <= obj1.width/2 + obj2.width/2
      && obj2.x - obj1.x <= obj1.width/2 + obj2.width/2
      && obj1.y - obj2.y <= obj1.height/2 + obj2.height/2
      && obj2.y - obj1.y <= obj1.height/2 + obj2.height/2) {
      return true;
    } else {
     return false;
    }
  }
}
