var cols, rows;
var scl = 20;
var w = 1200;
var h = 1300;

var terrain = [[]];

var flying=0;

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = floor(w/scl);
  rows= floor(h/scl);
}

function draw() {
  flying-=0.1;
  var yoff=flying;
  for(var y=0;y<rows;y++){
    var xoff = 0;
    terrain[y] = [];
    for(var x=0;x<cols;x++){
      terrain[y][x]=map(noise(xoff,yoff),0,1,-150,150);
      xoff+=0.1;
    }
    yoff+=0.1;
  }
  
  background(0);
  noFill();
  
  rotateX(PI/5);
  
  translate(-w/2,-h/2-200);
  for(var y=0;y<rows-1;y++){
    beginShape(TRIANGLE_STRIP);
    for(var x=0;x<cols;x++){
      stroke(floor(y/rows*255));
      vertex(x*scl,y*scl,terrain[y][x]);
      vertex(x*scl,(y+1)*scl,terrain[y+1][x]);
    }
    endShape();
  }
}