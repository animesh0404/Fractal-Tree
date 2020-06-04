function setup() {
  createCanvas(400,400);
}

function draw() {
  background(51);
  translate(200,height);
  var len = 100;
  stroke(255);
  branch(100);
}

function branch(len) {
  line(0,0,0,-len);
}