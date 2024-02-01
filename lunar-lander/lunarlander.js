function setup() {
  createCanvas(600, 300);
  background("skyblue");
}

function scenery() {
  push();
  noStroke();
  // grass
  fill("green");
  rect(0, 230, width, 100);

  let sunX = 465;
  let sunY = 45;

  fill(249, 215, 28);
  ellipse(sunX, sunY, 60, 60);
  stroke(249, 215, 28);
  line(435, 25, 400, 10, 5, 10);
  line(430, 40, 400, 38, 5, 10);
  line(430, 55, 400, 60, 5, 10);
  line(435, 70, 405, 85, 5, 10);
  line(445, 80, 435, 100, 5, 10);
  line(445, 80, 435, 100, 5, 10);

  pop();
}

function draw() {
  scenery();
}
