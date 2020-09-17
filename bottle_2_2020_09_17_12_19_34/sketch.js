let angle = 30;
let speed =1;


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {


  
  translate(0, 20);
  
  background(188,143,143);
  fill(255,255,255)
  
  
 
  fill(255,255,255)
  noStroke();
rect(270, 35, 55, 150, 8);// top
  
    noStroke();
rect(230, 170, 140, 350, 8);
  
  
  translate(200, 100);
    rotate(angle);
    angle = angle+.5;
  
  circle(340, 170, 60); // r big
  
    circle(260, 175, 60); // left blockout
  
  circle(340, 175, 60); // r blockout
  
  
  
  

  
  fill(255,255,255)// top white fillin
  rect(256, 115, 85, 40, 8);
  
  
  fill(188,143,143)// r fillin
  circle(340, 125, 30); 
  
  fill(188,143,143)// L fillin
  circle(255, 125, 30); 
  
  fill (188,143,143) // r blockout 
   rect(325, 30, 30, 100, 8);
  
  fill (188,143,143)//r blockout
   rect(240, 30, 30, 100, 8);
  
  //lable
  
    fill(176,196,222);
rect(240, 220, 120, 140, 8);
  
      fill(176,196,222);
rect(240, 371, 120, 40, 8);
  
  
  
  
  
  
  
  
}

