 let speed = 0.5; 
  var song
  let bigWords = ['BREATHE IN', 'BREATHE OUT'];
  let index = 0; 
  var mic; 
  var video; 
  var fade; 
  var fadeAmount = 1; 
  let bubble1; 
  let bubble2; 
  let bubble3; 
  let bubble4; 
  let bubble5; 
  let bubble6; 
  let bubble7; 
  let bubble8;
  let bubble9; 
  let bubble10; 
  let angle = 0;




function preload(){
  song = loadSound("chill-ambient-11322.mp3"); 
} 
  
  
function setup() {
  createCanvas(800, 800);
  song.play(); 
  bubble1 = new Bubble(400, 200); 
  bubble2 = new Bubble(250, 250);
  bubble3 = new Bubble(150, 400); 
  bubble4 = new Bubble(150, 550); 
  bubble5 = new Bubble(250, 650); 
  bubble6 = new Bubble(400, 700); 
  bubble7 = new Bubble(550, 650); 
  bubble8 = new Bubble(650, 400); 
  bubble9 = new Bubble(550, 250); 
  bubble10 = new Bubble(650, 550); 
  setInterval(changeWord, 4000);
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
    let r = map(sin(angle), -1, 1, 100, 150); //using sin function, circles will follow the sin graph
    circle(this.x, this.y, r * 0.5);

    angle += 0.001; //increment slowly = creating a slower pace 
  }
  

}//closer to class




function scene3(){
  background(220);
  textSize(30); 
  text(bigWords[index], 330, 450);
  bubble1.display(); 
  bubble2.display(); 
  bubble3.display(); 
  bubble4.display(); 
  bubble5.display(); 
  bubble6.display(); 
  bubble7.display(); 
  bubble8.display(); 
  bubble9.display(); 
  bubble10.display(); 
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




