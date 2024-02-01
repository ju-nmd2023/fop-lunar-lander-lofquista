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

  // SUN
  let sunX = 570;
  let sunY = 25;

  // sun
  fill(249, 215, 28);
  ellipse(sunX, sunY, 60, 60);

  // sun rays
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

  // TREE
  // tree trunk
  push();
  noStroke();
  fill(83, 53, 10);
  rect(350, 100, 20, 150);

  // tree branch
  push();
  stroke(83, 53, 10);
  strokeWeight(4);
  line(360, 165, 300, 150);
  pop();

  // tree crown
  fill(42, 126, 25);
  ellipse(335, 100, 40, 40);
  ellipse(365, 110, 50, 40);

  push();
  fill(32, 116, 15);
  ellipse(388, 108, 40, 35);
  pop();

  ellipse(385, 90, 40, 40);

  push();
  fill(32, 116, 15);
  ellipse(360, 75, 45, 45);
  ellipse(342, 115, 25, 30);
  pop();

  pop();
}

function draw() {
  scenery();
}

// TO DO:
// add a branch on the branch
// make tree in variables
// check canvas size on smaller computer
// make tree taller
