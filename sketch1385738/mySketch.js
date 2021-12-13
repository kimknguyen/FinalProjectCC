
 
  let speed = 0.5; 
  let bubble1;
  let bubble2; 
  let bubble3; 
  var song
  let bigWords = ['BREATHE IN', 'BREATHE OUT'];
  let index = 0; 

function preload(){
  song = loadSound("chill-ambient-11322.mp3"); 
} 
  
  
function setup() {
  createCanvas(400, 400);
  song.play(); 
  bubble1 = new Bubble (100, 200); 
  bubble2 = new Bubble (200, 100); 
  bubble3 = new Bubble (300, 200); 
  setInterval(changeWord, 3000);
}

function draw() {
  background(220);
  scene1(); 
}

class Bubble {
  constructor (x, y){
    this.x = x; 
    this.y = y; 
  }
  
  display(){
    ellipse (this.x, this.y, 50, 50); 
  }
  
  breatheIn(){
    this.x = this.x + speed; 
    //if(x > 200 || x < 100 ){
    //speed = -speed;
  }
  
  breatheIn3(){
    this.x = (this.x) - speed;
  }
  
  breatheIn2(){
    this.y = this.y + speed 
  }
  
  breatheOut(){
    if(this.x > 200 || this.x < 100 ){
    speed = -speed;
  }
  
  } 
}//closer to class


/* function scene1(){
  if (millis() >= 2000) {
    textSize(30); 
    text('Breathe Out', 150, 300)
    timer = millis(); 
} else if (millis() >= 1000) {
  textSize(30); 
  text('Breathe In', 150, 300);
}
} 
*/ 


function scene1(){
  text(bigWords[index], 150, 300);
  bubble1.display(); 
  bubble2.display(); 
  bubble3.display(); 
  bubble1.breatheIn(); 
  bubble2.breatheIn2(); 
  bubble3.breatheIn3(); 
  bubble1.breatheOut();
} 

function changeWord(){  
 index++; 
  
  if(index >= bigWords.length){
   index = 0; 
    
  }
}