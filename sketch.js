
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stoneObj= new stone(235,420,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectollision(stoneObj.mango1)
  
  drawSprites();
 
}



