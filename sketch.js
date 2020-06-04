var len = 250;
var angle = 0; // Calculating 45deg. 
var detail = 4.6;
var slider;

function setup() {
  createCanvas(800,800);
  slider = createSlider(0,2.36, 2.5, 0.01);  // Creating slider to choose values between 0 and 45deg. and step-size 0.01 .
  slider.class("sliders");
}

function draw() {
  background(51);
  angle = slider.value(); // Setting angle var. from slider. 
  translate(width / 2,height);  // Setting up (0,0 co-ord.) init point to middle-bottom of screen.  
  stroke(255);            // Line Color set to white(255).
  branch(len);          
}

function branch(len) {
  line(0,0,0,-len);
  translate(0,-len);      // Moving init point to new drawn line's top.

  if( len > detail) {          // Recursion Base only draw when length is greater than 4 pix.
    push();               //Remeber new tarnslated position.
    rotate(angle);        // Rotation in right side (+angle).
    branch(len * 0.67);   // Recursive call
    pop();                // Forget translated position and snap back to previous pos.
    
    push();   
    rotate(-angle);       // Rotation in left side (-angle).
    branch(len * 0.67);   
    pop();      
  }
    //line(0,0,0,-len * 0.67);       // Drawing new brach and reducing it by 2/3 size.
}