
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
        var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
	}
	paperOb=Bodies.circle(200,(this.r-20)/2,30,options)
        World.add(world,paperOb)

	Engine.run(engine);
  
}
function keyPressed(){
	if (keyDown("up")){
		Matter.Body.applyForce(paperOb,paperOb.position,{x:130,y:-145}) 
	}
}

function draw() {
  rectMode(CENTER);
  background(230);
  push () 
  imageMode(CENTER)
  translate (paperOb.position.x,paperOb.position.y)
  image (paperImg,0,0,this.r,this.r)
  pop ()
  groundObject.display();
  dustbinObj.display();

}

