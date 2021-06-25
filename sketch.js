
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function  preload(){
paperImg=loadImage("paper.png")





}
function setup() {


	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();


	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
paperOb=Bodies.circle(200,height-40,30)
World.add(world,paperOb)

	Engine.run(engine);
  
}
function keyPressed(){
	if (keyDown("up")){
		Matter.Body.applyForce(paperOb,paperOb.position,{x:25,y:-25}) 
	}
}

function draw() {
  rectMode(CENTER);
  background(230);
 push () 
 imageMode(CENTER)
 translate (paperOb.position.x,paperOb.position.y)
 rotate (paperOb.angle)
 image (paperImg,0,0,50,50)
pop ()
  groundObject.display();
  dustbinObj.display();

}

