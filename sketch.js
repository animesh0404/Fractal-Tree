var len = 100;
var angle = 0; // Calculating 45deg. 

var slider;

function setup() {
  createCanvas(400,400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);  // Creating slider to choose values between 0 and 45deg. and step-size 0.01 .
}

function draw() {
  background(51);
  angle = slider.value(); // Setting angle var. from slider. 
  translate(200,height);  // Setting up (0,0 co-ord.) init point to middle-bottom of screen.  
  stroke(255);            // Line Color set to white(255).
  branch(len);          
}

function branch(len) {
  line(0,0,0,-len);
  translate(0,-len);      // Moving init point to new drawn line's top.
  if( len > 4){           // Recursion Base only draw when length is greater than 4 pix.
    rotate(angle);        // Rotation in right side (+angle).
    branch(len * 0.67);   // Recursive call
    rotate(-angle);       // Rotation in left side (-angle).
    branch(len * 0.67);               
  }
    //line(0,0,0,-len * 0.67);       // Drawing new brach and reducing it by 2/3 size.
}