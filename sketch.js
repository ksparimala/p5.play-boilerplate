function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 80, 80); //movingrect.width/2=80/2=40
  movingRect.shapeColor="green";
  fixedRect=createSprite(200,200,80,80);//fixedrect.width/2=80/2=40
  fixedRect.shapeColor="green";//movingrect.width/2+fixedrect.width/2=40+40=80=movingRect.x-fixedRect.x
}

function draw() {
  background("yellow");  
  //movingRect.x-fixedRect.x=50
  console.log(fixedRect.x-movingRect.x);

  //the distance between 2 rectangle x  positions is eqal to sum of the 
  //half of the width of the rectangles
  //80 postive  making -80
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&& 
     fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  drawSprites();
}