var len;
var angle; 
var detail = 8;

function setup() {
  createCanvas(windowWidth - (windowWidth * 0.015), windowHeight - (windowHeight * 0.025)); // Setting up viewport.
  len = height * (2/6);                                                                     // Setting up intial height of tree.
}

function draw() {
  background(0);
  angle = map(mouseX, (width/10),  width - (width/10) , 0  , 2.36, true); // Mapping mouseX value in a nice viewing range.
  len   = map(mouseY, (height/10), height - (height/10), 400, 100, true); // Mapping mouseY value for handling tree height.
  var col = map(len,400,100,255,0,true);                                  // Mapping color in tree's length range.
  translate(width / 2,height);                                            // Setting up (0,0 co-ord.) init point to middle-bottom of screen.  
  colorMode(HSB);                                                         // Setting color mode to HSB.
  stroke(col,255,150);                                                    // Line Color updates according to length of tree.
  branch(len);        
}

function branch(len) {
  line(0,0,0,-len);
  translate(0,-len);      // Moving init point to new drawn line's top.

  if( len > detail) {     // Recursion Base only draw when length is greater than 4 pix.
    push();               //Remeber new tarnslated position.
    rotate(angle);        // Rotation in right side (+angle).
    branch(len * 0.67);   // Recursive call
    pop();                // Forget translated position and snap back to previous pos.
    
    push();   
    rotate(-angle);       // Rotation in left side (-angle).
    branch(len * 0.67);   
    pop();      
  }
}

function windowResized() {
  resizeCanvas(windowWidth - (windowWidth * 0.015), windowHeight - (windowHeight * 0.025));
}