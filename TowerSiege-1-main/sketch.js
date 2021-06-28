const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
 var ground,stand;
 var slingShot,polygon,polygonImg;
 var gameState = "onSling";
 var score = 0;
var backgroundImg,bg = "light.jpg";
 
 function preload(){
     polygonImg = loadImage("polygon.png");
     getTime();
 }

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
Engine.run(engine);
    ground = new Ground(450,390,900,20);
    stand = new Stand(390,300,250,10);
    fill("blue");
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
fill("pink");
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
fill("turquoise");
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingShot = new SlingShot(this.polygon,{x:100,y:200});
    
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();

    text("SCORE:"+score,750,40);
}

function mouseDragged(){
   if(gameState!=="launched"){
        Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
   }
}

function mouseReleased(){
    console.log("hi");
    slingShot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode===32){
        slingShot.attach(this.polygon);
        gameState = "onSling";
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson = await response.json();
    var dateTime = responsejson.datetime;
    var hour = dateTime.slice(11,13);
    if(hour>=06 && hour<=18){
        bg = "light.jpg";
    }
    else{
        bg = "dark.jpg";
    }
    backgroundImg = loadImage(bg);

} 