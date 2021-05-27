var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4;
var cars;

var car1IMG,car2IMG,car3IMG,car4IMG;

var trackIMG;
var groundIMG;

function preload(){
  car1IMG = loadImage("../images/car1.png");
  car2IMG = loadImage("../images/car2.png");
  car3IMG = loadImage("../images/car3.png");
  car4IMG = loadImage("../images/car4.png");
  trackIMG = loadImage("../images/track.jpg");
  groundIMG = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    drawSprites();
  }
  if(gameState===2){
    game.end();
  }
}
