const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles= []
var plinkos= []
var divisions= []
var divisionHeight=200;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground (width/2,width,height,20);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}