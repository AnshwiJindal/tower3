const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var sling_shot;
var polygon,polygon_img;
var score=0

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create()
  world = engine.world;
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //ON STAND NUMBER ONE

  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //ON STAND NUMBER TWO

  //level one
  block17 = new Block(640,175,30,40);
  //console.log(block1);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);
  //level two
  block22 = new Block(670,135,30,40);
  block23 = new Block(700,135,30,40);
  block24 = new Block(730,135,30,40);
  //top
  block25 = new Block(700,95,30,40);
  

  polygon = new Polygon(150,200,20,20)
  World.add(world,polygon);
  sling_shot = new Slingshot(polygon.body,{x: 150,y: 200});
  Engine.run(engine);
}

function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("pink")
  text("Press 'Space' to get another chance !",20,50) 
  console.log(score)
  
  ground.display();

  fill("yellow")
  stand1.display();
  stand2.display();
  
  //strokeWeight(2);
  //stroke(15);

//stand 1

  fill("darkblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("blue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("cyan");
  block13.display();
  block14.display();
  block15.display();
  fill("white");
  block16.display();

//stand 2

  fill("darkblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("blue");
  block22.display();
  block23.display();
  block24.display();
  fill("cyan");
  block25.display();
 
  polygon.display();

  sling_shot.display();

  text("Score = "+score, 700, 50)
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
 
  block13.score();
  block14.score();
  block15.score();
  
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  
  block22.score();
  block23.score();
  block24.score();
  
  block25.score(); 

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
  sling_shot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x: 150,y: 200})
    sling_shot.attach(polygon.body)
    sling_shot.bodyA 
  }
  
}

