# FinalProjectCC
  let x = 100; 
 
  let speed = 0.5; 


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  scene1(); 
}

function scene1(){
  
  ellipse (x, 200, 50, 50);
  x = x + speed; 
  if(x > 200 || x < 100 ){
    speed = -speed;
  } 
  
  ellipse (200, x, 50, 50);
  x = x + speed; 
  if(x > 180 || x < 100 ){
    speed = -speed;
  } 
  
  ellipse (300, 200, 50, 50); 
  
   
}