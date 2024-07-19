function setup() {
  createCanvas(600, 600);
  background(0);
  strokeWeight(2);
  stroke('white');
  frameRate(10) ;
 

}

function draw() {
 // declare variables 
  let posX = mouseX;
  let PosY = mouseY;
  // place a dot on the screen
   point( posX,PosY);
  
}