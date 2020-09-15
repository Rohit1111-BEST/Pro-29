var box,ground,slingshot;


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


  box8 = new Box(330,235,30,40)
  box9 = new Box(360,235,30,40)
  box10 = new Box(390,235,30,40)
  box11 = new Box(420,235,30,40)
  box12 = new Box(450,235,30,40)

  box13 = new Box(360,195,30,40)
  box14 = new Box(390,195,30,40)
  box15 = new Box(420,195,30,40)

  box16 = new Box(390,155,30,40)






  ground= new Ground(100,100,20,100)
}

function draw() {
  background(255,255,255);  

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  ground.display();
}