let eggY = 135;
let velocity = 1;
const acceleration = 0.1;
// let gameOverPosition;
gameOver = false;
let gameIsRunning = true;

function setup() {
  createCanvas(500, 400);
}

function scenery() {
  background("skyblue");

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
  let treeY = 115;

  // tree trunk
  push();
  noStroke();
  fill(83, 53, 10);
  rect(treeX - 10, treeY - 5, 20, 215);

  // tree branch
  push();
  stroke(83, 53, 10);
  strokeWeight(4);
  line(treeX, treeY + 45, treeX - 85, treeY + 30);
  line(treeX - 75, treeY + 30, treeX - 85, treeY + 15);
  line(treeX + 10, treeY + 65, treeX + 60, treeY + 60);
  line(treeX + 25, treeY + 60, treeX + 30, treeY + 45);
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
  ellipse(230, 148, 45, 15);
  // strokeWeight(4);
  // line(265, 165, 260, 160);
  // line(270, 165, 265, 155);
  // line(258, 170, 270, 168);
  pop();
}

function egg(x, y) {
  translate(x, y);
  noStroke();
  fill(255, 245, 196);
  ellipse(0, 0, 20, 30);
  stroke(125, 0, 0);
  strokeWeight(3);

  // following line was adapted from ChatGpt 2024-02-12
  let endOffset = sin(frameCount * 0.2) * 3;

  line(-11, 0, -25, -2 + endOffset);
  line(11, 0, 25, -2 + endOffset);
}

function draw() {
  scenery();
  egg(230, eggY);

  if (gameIsRunning === true) {
    eggY = eggY + velocity;
    velocity = velocity + acceleration;

    if (keyIsDown(38)) {
      velocity = velocity - 0.2;
    }

    if (eggY > 300 && velocity > 2) {
      gameIsRunning = false;

      console.log("Game over!");
    }

    if (eggY > 300 && velocity <= 2) {
      gameIsRunning = false;
      gameOver = false;
      console.log("You win!");
    }
  }
}

// TO DO:
// create soft grass
// fix birdnest
// create explosion + crack if gameover
// ask about citing chatgpt
// ask about the key 38, why i need to update it to work
