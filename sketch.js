//physics engine
//1.world    2.engine   3.body   
//name spacing 
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

//declaring my variable
var engine,world,object;
function setup() {
  createCanvas(800,400);

  //create the engine
  engine=Engine.create();
  world=engine.world;

  var options=
 {
  isStatic:true
 }
  object=Bodies.rectangle(200,200,50,50,options);

  //adding world and body
  World.add(world,object);
  

  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  //draw a rectangle 
  rectMode(CENTER);
  rect(400,200,50,50);

  rect(object.position.x,object.position.y,50,50)
}