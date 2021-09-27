var car1, car1Img;
var track, trackImg;
var bullet, bulletImg;

function preload()
{
  car1Img = loadImage("images/car1.png");
  trackImg = loadImage("images/track_new.png");
  bulletImg = loadImage("images/bullet1.jpg");
}

function setup() 
{
 
  createCanvas(displayWidth, displayHeight);

  track = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  track.addImage(trackImg);
  track.velocityY = 10;

  car1 = createSprite(displayWidth/2, displayHeight - 200, 45, 45);
  car1.addImage(car1Img);
  car1.scale = 0.7;
 
}

function draw()
{
  if(track.y > displayHeight)
  {
    track.y = displayHeight/2;
  }

  if(keyDown(LEFT_ARROW) && car1.x > displayWidth/2 - 200 )
  {
    car1.x = car1.x - 10;
  }
  if(keyDown(RIGHT_ARROW) && car1.x < displayWidth/2 + 200)
  {
    car1.x = car1.x + 10;
  }

  if(keyDown("SPACE"))
  {
      releaseBullets();
  }
  drawSprites();
}

function releaseBullets()
{
   bullet = createSprite(car1.x,car1.y,10,10);
   bullet.addImage(bulletImg);
   bullet.scale = 0.1;
   bullet.shapeColor = "red";
   bullet.velocityY = -5;


}


