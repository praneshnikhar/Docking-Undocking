var backgroundIMG, issIMG, spacecraftIMG, bothMotorsIMG, leftMotorIMG, rightMotorIMG;
var iss, spacecraft;
var hasDocked = false;


function preload() {
  backgroundIMG = loadImage("images/spacebg.jpg");

  issIMG = loadImage("images/iss.png");

  spacecraftIMG = loadImage("images/spacecraft1.png");
  bothMotors = loadImage("images/spacecraft2.png");
  leftMotor = loadImage("images/spacecraft3.png");
  rightMotor = loadImage("images/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 125, 50, 50);
  iss.addImage(issIMG);
  iss.scale = 0.8;

  spacecraft = createSprite(random(100, 700), 300, 50, 50);
  spacecraft.addImage(spacecraftIMG);
  spacecraft.scale = 0.25;
  spacecraft.depth = iss.depth - 1;
}


function draw() {
  //background(255,255,255);
  background(backgroundIMG);
  drawSprites();
  console.log(spacecraft.x, spacecraft.y);

  if(!hasDocked) {
    if(keyDown(LEFT_ARROW)) {
      spacecraft.addImage(rightMotor);
      spacecraft.x = spacecraft.x - 4;
    } else if(keyDown(RIGHT_ARROW)) {
      spacecraft.addImage(leftMotor);
      spacecraft.x = spacecraft.x + 4;
    } else if(keyDown(DOWN_ARROW)) {
      spacecraft.y = spacecraft.y + 4;
    } else if(keyDown(UP_ARROW)) {
       spacecraft.addImage(bothMotors);
       spacecraft.y = spacecraft.y - 4;
    } else {
      spacecraft.addImage(spacecraftIMG);
    }
  }

  if(spacecraft.y < 205 && spacecraft.x > 340 && spacecraft.x < 345) {
    hasDocked = true;
    fill("white");
    textSize(40);
    text("Docking Successful!", 220, 350);
  }
}