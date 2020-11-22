const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,380,50,50,options);
World.add(world,ground);

var opt = {
  restitution : 1
}

ball = Bodies.circle(400,100,20,opt);
World.add(world,ball);

console.log(ball);

}

function draw() {
  background("cyan");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}