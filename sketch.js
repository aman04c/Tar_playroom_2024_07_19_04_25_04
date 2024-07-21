function setup() {
  createCanvas(720, 480);
  background(225, 255, 0);

}

function draw() {

  rectMode(CENTER);
  fill(155, 10, 0);
  stroke(mouseY, mouseY);
  strokeWeight(10);
  rect(mouseX, mouseY, 50, 30);
}

function mousePressed()
{
  background(225, 255, 0);
}