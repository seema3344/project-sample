var question;
var contestant;
var database;
var quiz;
var gameState = 0;
var contestantCount;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
