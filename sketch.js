var bgImg;
var cat;
var mouse,catimg1,catimg2,catimg3,mouseimg3,mouseimg1,mouseimg2;
function preload()
 {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catimg1=loadAnimation("images/cat1.png")
    mouseimg1=loadAnimation("images/mouse1.png")
    catimg2=loadAnimation("images/cat3.png","images/cat2.png")
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimg3=loadAnimation("images/mouse4.png");
    catimg3=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
 cat = createSprite(870,600);
  cat.addAnimation("cat sleeping",catimg1);
  cat.scale=0.2

  mouse = createSprite(200,600);
  mouse.addAnimation("mouse standing",mouseimg1);
  mouse.scale=0.2

    //create tom and jerry sprites here

}

function draw() {

   
    background(bgImg);
   if(cat.x-mouse.x < cat.width/2-mouse.width/2)
{
  cat.velocityX=0;
  cat.addAnimation("catLastImage",catimg3);
  cat.x=300;
  cat.scale=0.2;
  cat.changeAnimation("catLastImage");
  mouse.addAnimation("mouseLastImage",mouseimg3);
  mouse.scale=0.15;
  mouse.changeAnimation("mouseLastImage");

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat.velocityX = -5
cat.addAnimation("catRunning",catimg2);
cat.changeAnimation("catRunning");

mouse.addAnimation("mouseTeasing",mouseimg2);
mouse.frameDelay=25;
mouse.changeAnimation("mouseTeasing");
}
}