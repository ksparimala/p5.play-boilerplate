function setup() {
  createCanvas(800,400);
  //create two rectangles  a=fixed rectangle    b=moving rectangle
  a=createSprite(200,200,50,50); //width of a=50  ,a.width/2=25
  b=createSprite(400,200,50, 50);//width of b=50  ,b.width/2=25   25+25=50=a.width/2+b.width/2
  a.shapeColor="green";
  b.shapeColor="green";
}

function draw() {
  background("yellow"); 
  b.x=mouseX;
  b.y=mouseY; 
  //distance between the rectangle x position
  console.log(b.x-a.x);
  if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2)
  {
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else
  {
    a.shapeColor="green";
    b.shapeColor="green";
  }
  drawSprites();
}