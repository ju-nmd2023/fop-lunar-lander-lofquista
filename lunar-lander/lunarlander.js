function setup() {
  createCanvas(500, 400);
  background("skyblue");
}

function scenery() {
  push();

  noStroke();
  // grass
  fill("green");
  rect(0, 300, width, 100);

  // SUN
  let sunX = 475;
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
  rect(320, 140, 20, 185);

  // tree branch
  push();
  stroke(83, 53, 10);
  strokeWeight(4);
  line(330, 180, 245, 165);
  line(255, 165, 245, 150);
  line(340, 200, 390, 195);
  pop();

  // tree crown

  let treeX = 330;
  let treeY = 135;

  fill(42, 126, 25);
  ellipse(treeX - 25, treeY - 15, 40, 40);
  ellipse(treeX, treeY, 50, 40);

  push();
  fill(32, 116, 15);
  ellipse(treeX + 25, treeY - 10, 40, 35);
  ellipse(treeX, treeY - 20, 50, 40);
  pop();

  ellipse(treeX + 20, treeY - 38, 40, 40);

  push();
  fill(32, 116, 15);
  ellipse(treeX - 12, treeY - 45, 45, 45);
  pop();

  ellipse(treeX - 12, treeY - 20, 25, 30);

  pop();

  // birdnest
  push();
  stroke(249, 224, 118);
  fill(249, 224, 118);
  ellipse(285, 166, 45, 15);
  strokeWeight(4);
  // line(265, 165, 260, 160);
  // line(270, 165, 265, 155);
  // line(258, 170, 270, 168);
  pop();
}

function draw() {
  scenery();
}

// TO DO:
// fix birdnest
// create egg
// create pile of leafs
// create game function
