var bg,bgImg;
var iss,issImg;
var rocket,rocketImg1,rocketImg2,rocketImg3,rocketImg4;
var hasDocked;


function preload(){
bgImg=loadImage("spacebg.jpg");
issImg=loadImage("iss.png");
rocketImg1=loadImage("spacecraft1.png");
rocketImg2=loadImage("spacecraft2.png");
rocketImg3=loadImage("spacecraft3.png");
rocketImg4=loadImage("spacecraft4.png");
}



function setup() {
  createCanvas(800,400);

  //creating the iss
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issImg);

  //creating the rocket
  rocket=createSprite(700,300,30,30);
  rocket.addImage(rocketImg1);
  rocket.scale=0.3;


}

function draw() {
  background(bgImg);


  if(!hasDocked){
 

    if(keyCode===DOWN_ARROW){
      rocket.velocityY=3;
      rocket.addImage(rocketImg2)
      }
      
      if(keyCode===UP_ARROW){
        rocket.velocityY=-3;
        rocket.addImage(rocketImg2)
        }
      
        if(keyCode===RIGHT_ARROW){
          rocket.velocityX=3;
          rocket.addImage(rocketImg4)
          }
      
          if(keyCode===LEFT_ARROW){
            rocket.velocityX=-3;
            rocket.addImage(rocketImg3)
            }
 
  hasDocked=false;
  }


  
  



  drawSprites(); 
}
 
if(rocket.x===335){
rocket.velocityX=0;
}
