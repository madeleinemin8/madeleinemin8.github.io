var flyCount = 0;
var healthCount = 0;
var tx = 0;
var ty = 0;
let interval = 5;
let frogWidth = 250;
let frogHeight = 200;
let frogX = 0;
let frogY = 0;
let eating = false;

function preload() {
  frogImage = loadImage('assets/frog.png');
  flyImage = loadImage('assets/fly.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(229, 254, 255);
  
  frogX = (windowWidth/2) - (frogWidth/2);
  frogY = (windowHeight/2) - (frogHeight/2);
  
  image(frogImage, frogX, frogY, frogWidth, frogHeight);
  
  noFill();
  stroke(90, 101, 104);  //gray
  strokeWeight(3);
  rect(windowWidth/2 - 200, frogY+frogHeight+68, 400, 35);
}

function draw() {
  if(frameCount % (interval * 60) == 0){
  	drawFly();
  }
  if(frameCount % (interval * 60) == 150){
  	reset();
  }
}

function drawFly() {
  tx = random(50, windowWidth - 50);
  ty = random(50, windowHeight - 50);
  image(flyImage, tx, ty, 50, 40);
}

function reset() {
  background(229, 254, 255);
  image(frogImage, frogX, frogY, 250, 200);
  noFill();
  stroke(90, 101, 104);  //gray
  strokeWeight(3);
  rect(windowWidth/2 - 200, frogY+frogHeight+68, 400, 35);
  stroke(214, 118, 118); //red
  fill(214, 118, 118);
  if (flyCount > 0) {
    rect(frogX-72.5, frogY+frogHeight+71, flyCount*30, 29);
  }
  eating = false;
}

function mouseClicked() {
  if (!eating) {
    eat();
  }
}

function eat() {
  // Draws tongue
  eating = true;
  strokeWeight(4);
  stroke(214, 118, 118);
  line((windowWidth/2), (windowHeight/2) - 42, mouseX, mouseY);
  // Verifies eaten
  if (mouseX > tx && mouseX < tx + 40 && mouseY > ty && mouseY < ty+50)   {
    updateHealth();
  }
}

function updateHealth () {
  flyCount++;
  if (flyCount > 13) {
    // take to trip page
    window.open("https://madeleinemin8.github.io/vr.html");
    flyCount = 0;
  }
  print("Flies: " + flyCount);
}