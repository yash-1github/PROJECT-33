var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var part;
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;



var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for( var i= 50; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 100);
    plinkos.push(p1);
  }
  for( var i= 75; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 170);
    plinkos.push(p1);
  }
    
  for( var i= 50; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 240);
    plinkos.push(p1);
  }
  for( var i= 75; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 310);
    plinkos.push(p1);
  }
    
  for( var i= 50; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 380);
    plinkos.push(p1);
  }
  for( var i= 75; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 450);
    plinkos.push(p1);
  }
     
   g = new Ground(400,780,width, 20);


   for(var i = 100; i<750; i = i+120){
     d1 = new Divisions(i, 630,10,280 );
     divisions.push(d1);
   }



   bound1 = new Divisions( 0, 400, 10 , height);
   bound2 = new Divisions( 800, 400, 10 , height);
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  for( var i = 0; i< plinkos.length  ;  i++ ){
    plinkos[i].display();
  }
  for(var i = 0; i<divisions.length ; i++){
    divisions[i].display();
  }

  if(part!= null){
    part.display();
    if(part.body.position.y > 750){ 
      if(part.body.position.x > 0 && part.body.position.x < 120){
        score = score + 500;
        part = null;
      }else if(part.body.position.x > 120 && part.body.position.x < 240){
        score = score + 400;
        part = null;
      }else if(part.body.position.x > 240 && part.body.position.x < 360){
        score = score + 300;
        part = null;
      }else if(part.body.position.x > 360 && part.body.position.x < 480){
        score = score + 200;
        part = null;
      }else if(part.body.position.x > 480 && part.body.position.x < 600){
        score = score + 300;
        part = null;
      }else if(part.body.position.x > 600 && part.body.position.x < 720){
        score = score + 400;
        part = null;
      }else if(part.body.position.x > 720 && part.body.position.x < 840){
        score = score + 500;
        part = null;
      }
    }
  }
 

  text( "SCORE : " + score, 100,50);

   
  g.display();
  bound1.display();
  bound2.display();
 
}

function mouseReleased(){
  part = new Particle( mouseX , -10, 10)
}