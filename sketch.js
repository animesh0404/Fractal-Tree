var len;
var angle; 
var detail = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  len = height * (2/6);
}

function draw() {
  background(51);
  angle = map(mouseX, (width/10),  width - (width/10) , 0  , 2.36, true); //.value(); // Setting angle var. from slider. 
  len   = map(mouseY, (height/10), height - (height/10), 400, 100, true);
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