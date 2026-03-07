let clickNo=0;

function setup(){
  createCanvas(600, 400);
  noLoop();
}

function draw(){
  background(220);
  ellipse(mouseX, mouseY, 80, 80);

  text("mouseX:"+mouseX,10,20);
  text("mouseY:"+mouseY,10,40);
  text("clicked:"+clickNo,10,60);
  
}


function mousePressed(){
  clickNo++;
  redraw();

  console.log("mouseX:"+mouseX);
  console.log("mouseY:"+mouseY);
  console.log("clicked:"+clickNo);
}
