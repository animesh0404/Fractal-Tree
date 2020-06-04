function setup() {
  createCanvas(400,400);
}

function draw() {
  background(51);
  translate(200,height);  // Setting up (0,0 co-ord.) init point to middle-bottom of screen.
  var len = 100;
  stroke(255);            // Line Color set to white(255).
  branch(100);          
}

function branch(len) {
  line(0,0,0,-len);
  translate(0,-len);      // Moving init point to new drawn line's top.
  rotate(PI/4);           // Rotate 45deg. the page.
  line(0,0,0,-len * 0.67);       // Drawing new brach and reducing it by 2/3 size.
}