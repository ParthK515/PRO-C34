
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,canvas;
var tree,treeImg;
var bow,arrow,angle;

function preload(){
  treeImg = loadImage("tree.png");
}
function setup() {
  createCanvas(1200,600);
  angleMode(DEGREES)
  angle = 15

  tree = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tree);

  bow = new Bow(180, 110, 130, 100, angle);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

