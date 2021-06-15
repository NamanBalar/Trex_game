var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ob1,ob2,ob3,ob4,ob5,ob6, Obstacles, ObstaclesGroup;
var clouds, CloudsGroup,cloudImg;
var score;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  ob1=loadImage("obstacle1.png");
  ob2=loadImage("obstacle2.png");
  ob3=loadImage("obstacle3.png");
  ob4=loadImage("obstacle4.png");
  ob5=loadImage("obstacle5.png");
  ob6=loadImage("obstacle6.png");
  cloudImg=loadImage("cloud.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  ObstaclesGroup=new Group();
  CloudsGroup=new Group();
  score=0;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  
  
  
  trex.collide(invisibleGround);
  spawnObstacles();
  spawnClouds();
  drawSprites();
}

function spawnObstacles(){
   
  if (frameCount%30===0){
    var Obstacles=createSprite(590,160,10,10);
  Obstacles.velocityX=-5;
    Obstacles.scale=0.5;
    Obstacles.lifetime=120;
    var rand=Math.round(random(1,6));
    ObstaclesGroup.add(Obstacles);
    console.log(rand);
    switch(rand){
           case 1:Obstacles.addImage("ob1",ob1);
           break;
           
           case 2:Obstacles.addImage("ob2",ob2);
          break;
          
          case 3:Obstacles.addImage("ob3",ob3);
          break;
          
          case 4:Obstacles.addImage("ob4",ob4);
          break;
          
      case 5:Obstacles.addImage("ob5",ob5);
          break;
          
          case 6:Obstacles.addImage("ob6",ob6);
          break;
          
          default:break;
  }
  }
  
  
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var clouds = createSprite(580,30,40,10);
    clouds.y = random(50,100);
    clouds.addImage("cloud",cloudImg);
    clouds.scale = 0.5;
    clouds.velocityX = -3;
    
     //assign lifetime to the variable
    clouds.lifetime = 134;
    
    //adjust the depth
    clouds.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}