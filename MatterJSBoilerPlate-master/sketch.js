
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5
var ground
var roof
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
     

	engine = Engine.create();
	world = engine.world;
    bob1 = new Bob(600,200,10)
    bob2 = new Bob(600,200,10)
    bob3 = new Bob(600,200,10)
    bob4 = new Bob(600,200,10)
    bob5 = new Bob(600,200,10)
    ground = new Ground(200,350,5000,50)
    roof = new Roof(1000,50,5000,40)
    
    rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0)
    
  

	//Create the Bodies Here.


	Engine.run(engine);
  
}
function draw() {

  Engine.update(engine)

  rectMode(CENTER);
  background(0);

  
     roof.display()

   ground.display()
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();
 
  
  


}










