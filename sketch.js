
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,450,800,50)
paperobj=new Paper(200,235,20)
dustbinwall1 = new Dustbin(530,445,120,15); 
dustbinwall2 = new Dustbin(485,395,15,100);
dustbinwall3 = new Dustbin(575,395,15,100);

	Engine.run(engine);
  
}


function draw() {
    background(0);
	rectMode(CENTER);
 ground.display() 
 paperobj.display()
 dustbinwall1.display()
 dustbinwall2.display()
 dustbinwall3.display()
  
  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paperobj.body, paperobj.body.position, {x: 23, y:-60});
		 } 
		}


