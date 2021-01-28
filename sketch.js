
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var TargeT,score
score = 0

function preload(){
  bullet = loadImage("Images/Bullet.png")
  gun = loadImage("Images/Gun.png")
  target = loadImage("Images/Target.png")
}

function setup() {
	createCanvas(displayWidth,displayHeight);
  
  player = createSprite(displayWidth-500,displayHeight-600,50,50)
  player.addImage(gun)
  player.scale = 0.25	

  
  targetGroup = new Group()
  bulletGroup = new Group()
}

function draw() {
  background("lightgrey");
  player.x = mouseX
  Target()
  Bullets()

  if(bulletGroup.isTouching(targetGroup)){
    targetGroup.destroyEach();
    score = score+1
  }
  noStroke
  fill(0,0,0)
  text("Score:" + score,30,30)
  
  drawSprites();
 
}

function Target(){
  if(frameCount%75===0){
    TargeT = createSprite(random(50,750),100,30,30)
    TargeT.addImage(target)
    TargeT.scale = 0.2
    TargeT.debug = true
    TargeT.setCollider("circle",0,0,200)
    targetGroup.add(TargeT)
    targetGroup.setLifetimeEach(75)
  }
 
}

function Bullets(){
  if(mousePressedOver(TargeT)){
    Bullet = createSprite(player.x,300,20,50)
    Bullet.addImage(bullet)
    Bullet.scale=0.1
    bulletGroup.add(Bullet)
    bulletGroup.setVelocityYEach(-5)
  }
}