var movingRect,fixedRect
function setup() {
  createCanvas(800,400); 
  movingRect=createSprite(400,200,50,50); //movingrect.width/2=60/2=30 
  movingRect.shapeColor="green";
  fixedRect=createSprite(600,200,50,50);//fixedrect.width/2=60/2=30
  fixedRect.shapeColor="green";      //movingrect.width/2+fixedrect.width/2=30+30=60
}

function draw() {
  background("lightgray"); 
  console.log("first"+(fixedRect.x-movingRect.x));
  console.log("second"+(movingRect.width/2+fixedRect.width/2));
  //the distance of the x position of the sprites(fixedRect.x-movingRect.x=50) is 
  //equal to the half of the width of the both sprites(movingrect.width/2+fixedrect.width/2=50)
  if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2)
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  fixedRect.x=mouseX;
  fixedRect.y=mouseY;
  drawSprites();
}