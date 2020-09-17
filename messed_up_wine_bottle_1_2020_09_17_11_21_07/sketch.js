function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  translate(0, 20);
  
  background(188,143,143);
  fill(255,255,255)
  
  
 
  fill(255,255,255)
  noStroke();
   translate(width / 100, height / 100);
  translate(p5.Vector.fromAngle(millis() / 3000, 40));
rect(270, 35, 55, 150, 8);// top
  
    noStroke();
   translate(width / 100, height / 100);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
rect(230, 170, 140, 350, 8);
  
  circle(260, 170, 60); // left big
  translate(width / 100, height / 100);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  
  circle(340, 170, 60); // r big
  
    circle(260, 175, 60); // left blockout
  
  
  
  circle(340, 175, 60); // r blockout
  

  
  fill(255,255,255)// top white fillin
  rect(256, 115, 85, 40, 8);
  
  
  fill(188,143,143)// r fillin
   translate(width / 100, height / 100);
  translate(p5.Vector.fromAngle(millis() / 800, 40));
  circle(340, 125, 30); 
  
  fill(188,143,143)// L fillin
  circle(255, 125, 30); 
  
  fill (188,143,143) // r blockout 
   translate(width / 100, height / 100);
  translate(p5.Vector.fromAngle(millis() / 300, 40));
   rect(325, 30, 30, 100, 8);
  
  fill (188,143,143)//r blockout
   rect(240, 30, 30, 100, 8);
  
  //lable
  
    fill(176,196,222);
  
rect(240, 220, 120, 140, 8);
  
      fill(176,196,222);
  
rect(240, 371, 120, 40, 8);
  
  
  
  
}

