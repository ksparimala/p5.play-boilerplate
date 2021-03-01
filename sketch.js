function setup() {
  createCanvas(800,400);

  movingRect=createSprite(400, 200, 100, 50);  //movingrect.width/2=100/2=50
  movingRect.shapeColor="green";
  fixedRect=createSprite(200,200,50,80)      //fixedRect.width/2=50/2=25
  fixedRect.shapeColor="green";              //movingRect.width/2+fixedRect.width/2=50+25=75
}                                            //movingRect.x-fixedRect.x=50
//movingRect.x-fixedRect.x=movingRect.width/2+fixedRect.width/2
function draw() {
  background(255,255,255);  
  console.log(movingRect.x-fixedRect.x);
  //if it is == it will work when it touch only
  //2.if it positive it will work rightside
  //3.if it is negative it will work  for leftside
  //comblined  2 and 3 point
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
     fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
     movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2&&
     fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2)
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  drawSprites();
}