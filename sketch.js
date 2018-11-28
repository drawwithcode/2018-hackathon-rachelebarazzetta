var mySong;
var analyser;
var pg;
var img;
var scritta;



function preload(){
  mySong = loadSound('./assets/CasaDePapel.mp3');
  img = loadImage('./assets/maschera.png');
  scritta = loadImage('./assets/scritta.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  analyser = new p5.Amplitude();
  analyser.setInput(mySong);
  angleMode(DEGREES);
  frameRate(4);

}

function draw() {
  var vol = 0;
    vol = analyser.getLevel();
    vol = map(vol,0,1,0,height);
    var volume = vol/5;
  var col =  lerpColor(color('#D1222B'), color('#020300'), volume/100)
  background(col);

    if(mySong.isPlaying() == false){
    mySong.loop();
    }

    var lineCenter1 = new lineCenter(width/2, height/2-91, 0);
    var lineCenter2 = new lineCenter(width/2, height/2+91, 180);
    var lineCenter3 = new lineCenter(width/2-91, height/2, 270);
    var lineCenter4 = new lineCenter(width/2+91, height/2, 90);

    var mask1 = new mask('Tokyo');
    var mask2 = new mask('Berlin');
    var mask3 = new mask('Rio');
    var mask4 = new mask('Nairobi');
    var mask5 = new mask('Denver');
    var mask6 = new mask('Moscou');
    var mask7 = new mask('Oslo');
    var mask8 = new mask('Helsinki');

    // var pallini1 = new pallini();

push();
    imageMode(CENTER);
    image(scritta, windowWidth-scritta.width/6, windowHeight/2+scritta.height/8, scritta.width/3, scritta.height/3);
    img.filter("gray");
      pop();

}

function lineCenter(transX, transY, rot){
  var vol = 0;
    vol = analyser.getLevel();
    vol = map(vol,0,1,0,height);
    var volume = vol/5;

  push();
    stroke(lerpColor(color('white'), color('black'), volume/130));
    strokeWeight(0.15);
    translate(transX, transY);
    rotate(rot);
    rotate(volume*sin(volume));
    translate(volume,0);
    rotate(volume*cos(volume));
    translate(-10,volume);

    for(var k = 0; k < 1000; k = k+10){
      line( sin(volume)*k, cos(volume)*k ,sin(0)*k, cos(0)*k);
      line( cos(volume)*k, sin(volume)*k ,cos(0)*k, sin(0)*k);
      line( cos(volume)*k, cos(volume)*k ,cos(0)*k, cos(0)*k);
      line( sin(volume)*k, sin(volume)*k ,sin(0)*k, sin(0)*k);
    }

  pop();

}

function pallini(){
  noStroke();
  fill('white');
  var vol = 0;
    vol = analyser.getLevel();
    vol = map(vol,0,1,0,height);
    var volume = vol/5;

  rotate(frameCount * 0.01);
for(var j = 0; j < 100; j++){
  push();
  for(var i = 0; i < 80; i++){
    translate(100, sin(volume * 0.001 + j) * 10, i * 0.1+ 20);
    rotate(frameCount * 0.002);
    push();
    ellipse(8,6,volume/20);
    pop();
  }
  pop();
}
}

function mask(name){
  push();
      var x = random(0, width);
      var y = random(0, height);
      imageMode(CENTER);
      image(img, x, y, 50, 50);
      img.filter("gray");
      textSize(20);
      fill('white');
      textAlign(CENTER);
      text(name, x, y+45);

        pop();
}

function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}
