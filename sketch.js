function setup() {
  createCanvas(600, 600);
  background(225,0,0);
  strokeWeight(5);
  stroke('blue');
  frameRate(10) ;
 

}

function draw() {
 // declare variables 
  let posX = mouseX;
  let PosY = mouseY;
  // place a dot on the screen
   point( posX,PosY);
  
}