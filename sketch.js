
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var boy
function preload()
{
 boyImage=loadImage("boy.png")	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground=new Ground(600,height,1200,20)
	 stone1= new Stone(700,300)
	 tree1= new Tree(200,200)
	 sling1= new Sling(stone1,150,150)

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  image(boyImage,200,140,200,300)
 
  ground.display();
  stone1.display();
  tree1.display()
}



