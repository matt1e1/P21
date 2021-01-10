var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,800);
  bullet=createSprite(400, 400, 50, 50);
  wall=createSprite(1200,400,thickness,height/2);

  createSprite(600,600,2000,20);
  createSprite(600,200,2000,20);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  
  bullet.velocityX=speed

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0
    bullet.x=1150
    
    var damage=0.5 * weight * speed* speed/(thickness* thickness* thickness);
  
    if(damage>10)
    {
      wall.shapeColor=color(255,60,60);
    }
  
     if(damage<10)
     {
       wall.shapeColor=color(60,255,60);
     }
  
  }
  
  
  else{
  bullet.shapeColor=(20,20,20);
  wall.shapeColor=(20,20,20);
  }
  

  drawSprites();
}

//function hasCollided(bullet,wall){
//bulletRightEdge=bullet.x+billet.width;
//wallLeftEdge=wall.x
//if(bulletRightEdge>=wallLeftEdge)
//{
 // return true
//}
//return false
//}


