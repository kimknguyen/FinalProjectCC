let speed = 0.5; 
  let bubble1;
  let bubble2; 
  let bubble3; 
  var song
  let bigWords = ['BREATHE IN', 'BREATHE OUT'];
  let index = 0; 
  var mic; 
  var video; 
  var fade; 
  var fadeAmount = 1; 

function preload(){
  song = loadSound("chill-ambient-11322.mp3"); 
} 
  
  
function setup() {
  createCanvas(800, 800);
  song.play(); 
  bubble1 = new Bubble (300, 500); 
  bubble2 = new Bubble (400, 300); 
  bubble3 = new Bubble (500, 500); 
  setInterval(changeWord, 3000);
  mic = new p5.AudioIn(); 
  mic.start();
  
  pixelDensity(1);
  video = createCapture(VIDEO);
  
  video.hide();
  
  fade = 0;

}

function draw() {
  background(0); 
  //intro(); 
  //if(millis() > 10000){
  //scene2(); 
  //} 
  //if (millis() > 20000){
  //scene3(); 
  //}
   scene3(); 
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




function scene3(){
  background(220);
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

function scene2(){
  background(220);
  textSize(30); 
  text('SCREAM', 400, 200); 
  textSize(20); 
  text('unleash your anger', 450, 250); 
  
  var vol = mic.getLevel(); 
  
  ellipse (400, 400, vol * 400, vol *400);
  //console.log(vol); 
}

function intro() {
  image(video, 450, 200, 300, 300);
  textSize(40); 
  //textFont(myFont); 
  fill(255, fade); 
  text('welcome', 100, 250); 
  if (fade<0) {
    fadeAmount=1;
  } 
  
  if(millis() > 3000) {
    text('you seem down', 100, 300); 
    } 
  
  if(millis() > 5000){
  text('don\'t worry', 100, 350); 
  }  
  
  if(millis() > 7000){
  text('this is a safe place', 100, 400); 
  }  
  
  if(millis() > 9000){
  text('let\'s begin', 100, 450); 
  }  
  
  fade += fadeAmount; 
} 



