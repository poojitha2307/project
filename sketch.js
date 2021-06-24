const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var player_img1, player_img2;
var score = 0;
var shuttle_img, shuttle;
function preload(){
  back_img = loadImage("bgImg1.jpg");
  player_img1 = loadImage("Img1.jpg");
  player_img2 = loadImage("Img2.jpg");
  //shuttle_img = loadImage("shuttle.png");
}
function setup() {
  createCanvas(1000, 600);

  engine = Engine.create();
	world = engine.world;
  database = firebase.database();
  //shuttle = new Shuttle(200,300,70);
  //shuttle.addImage("shuttle",shuttle_img);
  game = new Game();
  game.getState();
  game.start();
  Engine.run(engine);
}

function draw() {
  background("blue");
  
   if (playerCount === 2) {
     game.update(1);
     background(back_img);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   //shuttle.display();
  // drawSprites();
}