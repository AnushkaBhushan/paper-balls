var ball,ballImg,dustbin,dustbinImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){	
	dustbinImg=loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(1200, 500);


	dustbin=createSprite(1000,315,1200,100);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(200,400,30);

	box1 = new box(930,317,20,165);
	box2 = new box(1070,317,20,165);
	box3 = new box(1000,390,120,20);

	ground = new Ground(600,450,1200,100);

	//dustbin = new Dustbin(1000,320,160,160);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  //ball.addImage(ballImg);

  ball.display();
  //box1.display();
  //box2.display();
  //box3.display();

  ground.display();

  //dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-110})
	}
}