let greenColor;
let angles = [];

function setup() {
  createCanvas(500, 400);
  background("skyblue");
  // drawGrass(width/2, height, 100);
  // greenColor = generateRandomGreenColor();
  generateAngles();
  // frameRate(2);
}

function generateAngles() {
  for (let i = 0; i < 150; i++) {
    // Adjust 150 to match the number of grass lines
    angles.push(random(-PI / 10, PI)); // Generate random angles and store them in the array
  }
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

  let treeX = 280;
  let treeY = 125;

  // tree trunk
  push();
  noStroke();
  fill(83, 53, 10);
  rect(treeX - 10, treeY - 5, 20, 200);

  // tree branch
  push();
  stroke(83, 53, 10);
  strokeWeight(4);
  line(treeX, treeY + 45, treeX - 85, treeY + 30);
  line(treeX - 75, treeY + 30, treeX - 85, treeY + 15);
  line(treeX + 10, treeY + 65, treeX + 60, treeY + 60);
  pop();

  // tree crown
  fill(42, 126, 25);
  ellipse(treeX - 25, treeY - 20, 40, 40);
  ellipse(treeX, treeY - 5, 50, 40);

  push();
  fill(32, 116, 15);
  ellipse(treeX + 25, treeY - 15, 40, 35);
  ellipse(treeX, treeY - 25, 50, 40);
  pop();

  ellipse(treeX + 20, treeY - 43, 40, 40);

  push();
  fill(32, 116, 15);
  ellipse(treeX - 12, treeY - 50, 45, 45);
  pop();

  ellipse(treeX - 12, treeY - 25, 25, 30);

  pop();

  // birdnest
  push();
  stroke(249, 224, 118);
  fill(249, 224, 118);
  ellipse(230, 157, 45, 15);
  strokeWeight(4);
  // line(265, 165, 260, 160);
  // line(270, 165, 265, 155);
  // line(258, 170, 270, 168);
  pop();

  //   push();
  // stroke("green");
  // strokeWeight(2);
  // line(205, 305, 200, 290);
  //   pop();
}

function drawGrass(startX, endX, grassY2, numGrass) {
  for (let i = 0; i < numGrass; i++) {
    let grassX = random(startX, endX);
    let grassY = grassY2;
    let length = random(10, 20);
    // let angle = random(-PI / 10, PI);
    let greenColor = generateRandomGreenColor();

    stroke(greenColor);
    strokeWeight(2);
    let GrassX2 = grassX + length * cos(angles[i]);
    let GrassY2 = grassY - length * sin(angles[i]);

    line(grassX, grassY, GrassX2, GrassY2);
  }
}

function generateRandomGreenColor() {
  return color(random(50, 100), random(150, 255), random(50, 100));
}

function egg() {
  noStroke();
  fill(255, 245, 196);
  ellipse(229, 145, 20, 30);
}

function draw() {
  scenery();
  egg();
  // drawGrass(200, 255, 312, 150);
}

// TO DO:
// create soft grass
// fix birdnest
// create wings
// make tree taller?
// create game function
