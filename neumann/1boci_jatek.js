let gomb = document.getElementById("gomb");
maradekIdo = 5;

let count =0;
let col = 0;

let now = 0;
let prv = 0;

let alpha=0;


let score = 0;
let s = 'Játék';

let tiles = [];
var gameOver = false;
var gameWon = false;


class Tile{
  constructor(lane,w,h){
    this.lane= lane;
    this.t=w;
    this.w = w/4-2;
    this.h = h/5;
    this.x = 1 + this.lane*w/4;
    this.y = -2*this.h;
    this.speed = 6;
  }
  
  move(r,a){
      this.y+=r*this.speed+a;
  }
  
  touched(x,y,a){
    stroke(255-col);
    textSize(32);
    textAlign(CENTER);
    fill(0);
    if((x>this.x) && (x<this.x+this.w) && (y>this.y) && (y<this.y+this.h+a)){
      if(this.y<this.h/2){
        score+=1;
        s = 'ezaz';
      }
      else if(this.y<3*this.h/2){
        score+=2;
        s = 'nem rossz';
      }
      else if(this.y<5*this.h/2){
        score+=3;
        s = 'szép';
      }
      else if(this.y<7*this.h/2){
        score+=4;
        s = 'szuper';
      }
      else if(this.y<9*this.h/2){
        score+=5;
        s = 'NYOMOOOD';
      }
      return true;
    }
    else {
      s = 'VESZTETTEL';
      gameOver=true;
    }
  }
  
  arrived(){
    if(this.y>-this.h+5){
      return true;
    }
    return false;
  }
  
  missed(){
    return this.y>10*this.h/2;
}
  
  show(r,a){
      fill(255-col);
      push();
        translate(this.x,this.y);
        rectMode(CENTER);
        rect(this.w/2,this.h/2,r*this.w,r*this.h+a);
      pop();
  }
}


function setup(){
  if(windowWidth<windowHeight-20){
    createCanvas(windowWidth,windowHeight);
  }
  else{
    createCanvas(windowHeight/2,windowHeight-20);
    
  }
  background(col);
  now = int(random(4));
  tiles.push(new Tile(now,width,height));
 
}

function mouseClicked(){
  
    if(tiles[0].touched(mouseX,mouseY,alpha)){
    tiles.splice(0,1);}
  else {
    gameOver = true;
  }
  }


function draw(){
  frameRate(30);
  alpha = frameCount/200;
  
  if(tiles[tiles.length-1].arrived()){
    prv = now;
    now = int(random(4));
    if(now===prv)
      count++;
    if(count===3){
      now = 3 - now;
      count = 0;
    }
    tiles.push(new Tile(now,width,height));
  }
  
  for(tile of tiles){
    if(tile.missed()){
      s = 'VESZTETTEL';
      gameOver=true;
      /*setInterval(() => {
        if(maradekIdo>=0 && gameOver){
         document.getElementById("ido").innerHTML=maradekIdo;
         maradekIdo--;
    }else{
        restartGame();
        maradekIdo=5;
        gameOver=false;
    }
     },5000)  */
    }
  }
  
  if(score<100)
    col=0;
  else if(score<200)
    col=255;
  else if(score<300)
    col=0;
  else if(score<400)
    col=255;
  else if(score<500)
    col=0;
  else
    col=255;

  
  background(col,200);
  stroke(100);
  line(1*width/4,0,1*width/4,height);
  line(2*width/4,0,2*width/4,height);
  line(3*width/4,0,3*width/4,height);
  line(0,4*height/5,width,4*height/5);
  stroke(255-col);
  
  for(tile of tiles){
    if(!gameOver&&!gameWon){
      tile.show(0.8,1);
      tile.move(1,1);
    }
  }
  
  textSize(32);
  textAlign(CENTER);
  fill(0);
  text(s,width/2,32);
  text(score,width/2,64);
  
  if(score>=600){
    gameWon = true;
  }
  if(gameOver == true){
    textSize(45);
    text('vesztettél',width/2,height/3);
    gomb.style.visibility = "visible";
    
}
  else{
    gomb.style.visibility = "hdden";
  }
  if(gameWon){
    textSize(50);
    background(col);
    text('befejezted',width/2,height/2);
    text('nyertél',width/2,height/2+50);
    text('pontok:'+score,width/2,height/2+100);
  }
}
function restartGame() {
  gameOver = false;

  score = 0;
  s = "jatek";
  tiles = [];
  gameWon = false;
  col = 0;
  now = int(random(4));
  tiles.push(new Tile(now, width, height));
  console.log("lopp elott");
  loop();
  console.log("loop utan");
}
