
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5
var roof 
var rope1, rope2, rope3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(400,175,400,20)
	ball1= new Ball(240,575,40)
	ball2=new Ball(320,575,40)
	ball3= new Ball(400,575,40)
	ball4= new Ball(480, 575,40)
	ball5= new Ball(560,575,40)
	rope1=new Rope(ball1.body, roof.body, -160,0)
	rope2=new Rope(ball2.body, roof.body, -80,0)
	rope3= new Rope(ball3.body, roof.body, 0,0)
	rope4= new Rope(ball4.body, roof.body, 80, 0)
	rope5= new Rope(ball5.body, roof.body, 160, 0)

	
  
}


function draw() {
  background(220);
  Engine.update(engine)
  rectMode(CENTER);
  
  
  roof.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-50, y:-45})
  }
 }
 

