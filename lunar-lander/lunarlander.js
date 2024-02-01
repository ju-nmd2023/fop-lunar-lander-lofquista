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

  // sun
  let sunX = 570;
  let sunY = 25;

  fill(249, 215, 28);
  ellipse(sunX, sunY, 60, 60);
  stroke(249, 215, 28);
  line(sunX - 30, sunY - 20, sunX - 65, sunY - 30, 5, 10);
  line(sunX - 35, sunY, sunX - 65, sunY - 2, 5, 10);
  line(sunX - 35, sunY + 15, sunX - 65, sunY + 20, 5, 10);
  line(sunX - 30, sunY + 28, sunX - 60, sunY + 45, 5, 10);
  line(sunX - 20, sunY + 35, sunX - 30, sunY + 60, 5, 10);
  line(sunX - 5, sunY + 40, sunX - 5, sunY + 65, 5, 10);
  line(sunX + 10, sunY + 38, sunX + 15, sunY + 65, 5, 10);
  line(sunX + 25, sunY + 35, sunX + 40, sunY + 55, 5, 10);

  pop();

  push();
  noStroke();
  fill(83, 53, 10);
  rect(350, 100, 25, 150);
  pop();
}

function draw() {
  scenery();
}
