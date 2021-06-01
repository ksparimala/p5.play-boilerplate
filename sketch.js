//functions and arguments
//user defined functions-DRY
var car,wall,fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200,50, 100);   //frw/2=80/2=40
  fixedRect.shapeColor="red";
  movingRect=createSprite(600, 200, 100, 50);   //movingrectwidth/2=80/2=40
  movingRect.shapeColor="red";                 //fixedrectwidth/2+movingrectwidth/2=40+40=80

  car=createSprite(200,100,100,50)
  car.shapeColor="pink";
  car.velocityX=2;

  wall=createSprite(600,100,50,100)
  wall.shapeColor="pink";

}

function draw() {
  background("yellow"); 
  movingRect.x=mouseX;  
  movingRect.y=mouseY;
  //calling the function-friend1
  if(isTouching(movingRect,fixedRect))
  {
    fixedRect.shapeColor="green";
   movingRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  //friend-2
  if(isTouching(car,wall))
  {
   car.velocityX=0;
  }
  else
  {
    car.shapeColor="pink";
    wall.shapeColor="pink";
  }
  drawSprites();
}
