const w = 500;
const h = 500;
const frate = 5;
const nGear = 19;
const bGear = 1.12;
let rGear;
let rSpace;
let radGear;

function setup() {
  createCanvas(w, h);
  rGear = min(w, h) / 8;
  rSpace = rGear + rGear * bGear;
  radGear = TWO_PI / nGear;
  frameRate(frate);
}

function draw() {
  background(0);

  // Red
  push();
  stroke(color(200, 0, 0));
  translate(w / 2, h / 2);
  rotate(frameCount / frate);
  drawGear(nGear, rGear);
  pop();

  // Green
  push();
  stroke(color(0, 200, 0));
  translate(w / 2 - rSpace, h / 2);
  rotate(-frameCount / frate + radGear / 2);
  drawGear(nGear, rGear);
  pop();

  //Blue
  push();
  stroke(color(0, 0, 200));
  translate(w / 2, h / 2 - rSpace);
  rotate(-frameCount / frate);
  drawGear(nGear, rGear);
  pop();

  //Sky Blue
  push();
  stroke(color(0, 255, 255));
  // translate(rGear * 6 * 0.92, rGear * 6 * 0.92);
  translate(w / 2 + rSpace / Math.sqrt(2), h / 2 + rSpace / Math.sqrt(2));
  rotate(-frameCount / frate + 10);
  drawGear(nGear, rGear);
  pop();
}

function drawGear(n, r) {
  for (i = 0; i < TWO_PI; i += 0.01) {
    var y1 = 0;
    if (sin(i * n) >= 0) {
      y1 = r;
    } else {
      y1 = r * bGear;
    }
    line(y1 * cos(i), y1 * sin(i), 0, 0);
  }
  ellipse(0, 0, 10);
}
