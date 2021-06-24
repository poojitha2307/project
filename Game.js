class Game {
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,400);
    player1.addImage("player1",player_img1);
    player1.scale = 0.05
    
    player2 = createSprite(800,400);
    player2.addImage("player2", player_img2);
    player2.scale = 0.05
    players=[player1,player2];
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2			
        }
   shuttle = createSprite(200,300,70,options);
   // shuttle.addImage("shuttle",this.image);
   // shuttle.display();
   // drawSprites();
        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                   //  index = index+1;
                    // x = 200;
                   //  y=500-allPlayers[plr].distance;
                     
                    // players[index -1].x = x;
                   //  players[index - 1].y = y;
                       
                     
                        
                         fill("black");
                         
                       
                       textSize(20);
                           // text(allPlayers[plr].name,x-25,y+25)
                            //player.score = 0
                            fill("white");
                            textSize(20);
                            text("player1="+allPlayers.player1.score,20,20)
                            text("player2="+allPlayers.player2.score,20,40)
                         
                     
                    
                      
                 
                 }
                if(keyIsDown(RIGHT_ARROW)){
                    player1.x = player1.x+10;
                }
                if(keyIsDown(LEFT_ARROW)){
                    player1.x = player1.x-10;
                }
                 
                if(keyIsDown(UP_ARROW)){
                    player2.x = player2.x+10;
                }
                if(keyIsDown(DOWN_ARROW)){
                    player2.x = player2.x-10;
                }
                //if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                   // player.distance -= 10
                   // player.update();
               // }
               // if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                   // player.distance += 10
                   // player.update();
               // }
            
                
                 
                 // if (player.index !== null) {
                      
                    //for (var i = 0; i < fruitGroup.length; i++) {
                       // if (fruitGroup.get(i).isTouching(players)) {
                       // fruitGroup.get(i).destroy();
                       // player.score += 10;
                       // player.update();
                            
                       // }
                        
                   
                   // }

                 // }

              

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}
