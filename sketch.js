var blocks=[
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],  
];
var cam={
  x:0,
  y:0
};
var x;
var y;
var circlix=[];
var anticircleX=[];
var anticircleY=[];
var circleRed=[];
var circleR=[];
var antiCircleR=[];
var circleGreen=[];
var circleBlue=[];
var circliy=[];
var keys=[];
var level=0;
function keyPressed(){
  keys[keyCode]=true;
}
function keyReleased(){
  keys[keyCode]=false;
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
var testMap=[
  '                            ',
  '1                           ',
  '                            ',
  ' 11                    1    ',
  ' 1                       1  ',
  '    111      1         1    ',
  '     11  1 1      111    1  ',
  '        1     111  1   111  ',
  '                1           ',
  '                            ',
  '                            ',
];
var player;
var levelWidth;
var levelHeight;
var rotation1;
var rotation2;
var rotation1now;
var rotation2now;
function setup() {
  rotation1=random(0,PI);
  rotation2=random(0,PI);
  rotation1now=random(0,PI/6);
  rotation2now=random(0,PI/6);
  createCanvas(windowWidth,windowHeight);
  x=width/2-165*1.5;
  y=-width/5;
  player=new Player(100,100);
  Load(blocks,worldMap)
  for(var i=0;i<blocks[level].length;i++){
    if(blocks[level][i].type1===1){
      blocksNeededtoTouch++;
    }
  }
  for(var i=0;i<20;i++){
    circlix.push(random(0,width));
    circliy.push(random(0,height));
    anticircleX.push(random(0,width));
    anticircleY.push(random(0,height));
    circleRed.push(random(200,255));
    circleR.push(random(20,100));
    circleGreen.push(random(200,255));
    circleBlue.push(random(200,255));
    antiCircleR.push(random(20,100));
}
}
var blocksTouched=0;
var blocksNeededtoTouch=0;
var a=0
function draw() {
  frameRate(60);
    for(var i=0;i<worldMap[level].length;i++){
    for(var j=0;j<worldMap[level][i].length;j++){
      levelHeight=worldMap[level].length;
      levelWidth=worldMap[level][i].length;
    }
  }
  if(levelWidth*50>width){
    cam.x=lerp(cam.x, width/2-player.x, 0.05);
  }else{
    cam.x=-levelWidth*25;
  }
  if(levelHeight*50>height){
    cam.y=lerp(cam.y, height/2-player.y, 0.05);
  }else{
    cam.y=-levelHeight*25;
  }
  switch(level){
    case 0:
      background(19, 0, 31);
    break;
    case 1:
      background(19, 0, 31);
    break;
    case 2:
      background(19, 0, 31);
    break;
    case 3:
      background(19, 0, 31);
    break;
    case 4:
      background(19, 0, 31);
    break;
    case 5:
      background(19, 0, 31);
    break;
    case 6:
      background(19, 0, 31);
    break;
    case 7:
      background(19, 0, 31);
    break;
    case 8:
      background(19, 0, 31);
    break;
    case 9:
      background(181,241,255);
    break;
    case 10:
      background(181,241,255);
    break;
    case 11:
      background(181,241,255);
    break;
    case 12:
      background(19, 0, 31);
    break;
    case 13:
      background(181,241,255);
    break;
    case 14:
      for(var i=0;i<width;i++){
        var a=color(255, 215, 122,200);
        var b=color(255, 191, 238,200);
        var c=lerpColor(a,b,i/width);
        stroke(c);
        line(i,0,i,height);
      }
      if(frameCount%30===0){
        rotation1=random(0,PI/6);
        rotation2=random(0,PI/6);
      }
      for(var i=-width*0.5;i<width*1.25;i+=300){
        stroke(0,0,0,30);
        noFill();
        strokeWeight(3);
        drawHexagon(i,3*height/4,150,6,rotation1now);
        drawHexagon(i+150,height/4,150,6,rotation2now);
      }
      rotation1now=lerp(rotation1now,rotation1,0.05);
      rotation2now=lerp(rotation2now,rotation2,0.05);;
    break;
    case 15:
      for(var i=0;i<width;i++){
        var a=color(255, 215, 122,200);
        var b=color(255, 191, 238,200);
        var c=lerpColor(a,b,i/width);
        stroke(c);
        line(i,0,i,height);
      }
      if(frameCount%30===0){
        rotation1=random(0,PI/6);
        rotation2=random(0,PI/6);
      }
      for(var i=-width*0.5;i<width*1.25;i+=300){
        stroke(0,0,0,30);
        noFill();
        strokeWeight(3);
        drawHexagon(i,3*height/4,150,6,rotation1now);
        drawHexagon(i+150,height/4,150,6,rotation2now);
      }
      rotation1now=lerp(rotation1now,rotation1,0.05);
      rotation2now=lerp(rotation2now,rotation2,0.05);;
    break;
    case 16:
      background(19,0,31);
    break;
    case 17:
      background(255);
    break;
    case 18:
      background(19,0,31);
    break;
    case 19:
      background(255);
    break;
    case 20:
      background(255);
    break;
    case 21:
      background(255);
    break;
    case 22:
      background(255);
      push();
y=lerp(y,height/2,0.05);
translate(x,y);
scale(1.5);
fill(0);
strokeWeight(3);
//H
beginShape();
vertex(0,20);
vertex(20,20);
vertex(30,0);
vertex(40,0);
vertex(30,20);
vertex(50,20);
vertex(80,-40);
vertex(60,-40);
vertex(45,-10);
vertex(35,-10);
vertex(50,-40);
vertex(30,-40);
endShape(CLOSE);
//E
beginShape();
vertex(70,20);
vertex(100,-40);
vertex(150,-40);
vertex(140,-20);
vertex(110,-20);
vertex(105,-10);
vertex(135,-10);
vertex(130,0);
vertex(100,0);
vertex(95,10);
vertex(125,10);
vertex(120,20);
endShape(CLOSE);
//M
beginShape();
vertex(170,20);
vertex(170,-40);
vertex(190,-40);
vertex(200,-10);
vertex(210,-40);
vertex(230,-40);
vertex(230,20);
vertex(210,20);
vertex(210,0);
vertex(190,0);
vertex(190,20);
endShape(CLOSE);
beginShape();
vertex(250,20);
vertex(260,0);
vertex(275,0);
vertex(285,-20);
vertex(270,-20);
vertex(280,-40);
vertex(330,-40);
vertex(320,-20);
vertex(305,-20);
vertex(295,0);
vertex(310,0);
vertex(300,20);
endShape(CLOSE);
pop();
for(var i=0;i<circlix.length;i++){
  fill(circleRed[i],circleGreen[i],circleBlue[i],100);
  noStroke();
  ellipse(circlix[i],circliy[i],circleR[i],circleR[i]);
      circlix[i]=lerp(circlix[i],anticircleX[i],0.05);
      circliy[i]=lerp(circliy[i],anticircleY[i],0.05);
      circleR[i]=lerp(circleR[i],antiCircleR[i],0.05);
  if(frameCount%30===0){
      anticircleX[i]=random(0,width);
      anticircleY[i]=random(0,height);
      circleR[i]=random(20,100);
  }
}
    break;
  }
  push();
  translate(width/2,height/2);
  translate(cam.x,cam.y);
  if(levelHeight*50>height){
    translate(0,-height/2);
  }
  if(levelWidth*50>width){
    translate(-width/2,0);
  }
  player.update(blocks[level]);
  player.show();
  for(var i=0;i<blocks[level].length;i++){
    blocks[level][i].update(player);
    blocks[level][i].updateTexture(blocks[level]);
    blocks[level][i].show();
  }
  pop();
  if(player.hitPortal){
    player.yvel=0;
    level++;
    Load(blocks, worldMap);
    Erase(blocks[level-1]);
  }
}
