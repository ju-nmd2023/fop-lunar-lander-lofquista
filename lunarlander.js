let eggY = 135;
let velocity = 1;
const acceleration = 0.1;
let gameOver = false;
let gameIsRunning = true;
let rotateEgg = false;

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
  pop();
}

function egg(x, y) {
  push();
  translate(x, y);

  if (rotateEgg) {
    rotate(radians(45));
  }

  noStroke();
  fill(255, 245, 196);
  ellipse(0, 0, 20, 30);
  stroke(125, 0, 0);

  if (gameOver) {
    stroke(0, 0, 0);
    line(-9.5, -2, -5, -4);
    line(-5, -4, 2, 0);
    line(2, 0, 6, -4);
    line(6, -4, 9, -3);
    line(-9.5, 3, -3, 5);
    line(-3, 5, -1, 8);
    line(5, -12, 0, -8);
    line(0, -8, -2, -9);
  }
  pop();
}

// egg cracking in case of game over
let cracks = [];

function createCrack(x, y) {
  const crackVelocity = 0.2 + Math.random();
  const angle = Math.PI * Math.random();
  const maxLife = 100 + Math.floor(Math.random) * 100;
  return {
    x: x,
    y: y,
    crackVelocity: crackVelocity,
    maxLife: maxLife,
    life: 0,
    angle: angle,
  };
}

function updateCrack(crack) {
  crack.x = crack.x + Math.cos(crack.angle) * crack.crackVelocity;
  crack.y = crack.y + Math.sin(crack.angle) * crack.crackVelocity;
  crack.crackVelocity *= 0.97;
  crack.life += 1;

  if (crack.life > crack.maxLife) {
    const crackIndex = cracks.indexOf(crack);
    crack.splice(crackIndex, 1);
  }
}

function drawCrack(crack) {
  push();
  translate(crack.x, crack.y);
  noStroke();
  fill(255, 210, 60);
  ellipse(0, 0, 12, 8);
  pop();
}

function textLose() {
  textSize(55);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(255, 255, 255, 80);
  rect(100, 145, 300, 100);
  fill(0);
  text("Game Over", 250, 200);
}

function draw() {
  scenery();

  for (let crack of cracks) {
    updateCrack(crack);
    drawCrack(crack);
  }

  egg(230, eggY);

  if (gameIsRunning === true) {
    eggY = eggY + velocity;
    velocity = velocity + acceleration;

    if (keyIsDown(38)) {
      velocity = velocity - 0.2;
    }

    if (eggY > 300 && velocity > 1) {
      gameIsRunning = false;
      gameOver = true;
      console.log("Game over!");
      rotateEgg = true;

      for (let i = 0; i < 150; i++) {
        cracks.push(createCrack(230, eggY));
      }
    }

    if (eggY > 300 && velocity <= 1) {
      gameIsRunning = false;
      gameOver = false;
      console.log("You win!");
    }
  }
  if (gameOver) {
    textLose();
  }
}

// TO DO:
// create soft grass
// fix birdnest?
// adding text for when you win
// create button for playing again
