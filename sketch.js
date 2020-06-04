function setup() {
  createCanvas(400,400);
}

function draw() {
  background(51);
  translate(200,height); // Setting up 0,0 co-ord. to middle-bottom of screen.
  var len = 100;
  stroke(255);          // Line Color set to white(255).
  branch(100);          
}

function branch(len) {
  line(0,0,0,-len);
}