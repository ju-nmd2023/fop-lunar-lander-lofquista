let eggY = 135;
let velocity = 1;
const acceleration = 0.1;
let gameOver = false;
let gameWon = false;
let gameIsRunning = false;
let rotateEgg = false;
let windStrength = -85;
let maxWindStrength = 40;

function setup() {
  createCanvas(500, 400);
}

function startScreen() {
  background("skyblue");
  push();
  noStroke();
  fill(83, 53, 10);
  rect(350, 150, 75, 250);
  stroke(83, 53, 10);
  strokeWeight(20);
  line(365, 330, 0, 300);

  stroke(249, 224, 118);
  fill(249, 224, 118);
  ellipse(130, 300, 185, 50);

  stroke(229, 204, 98);
  fill(229, 204, 98);
  ellipse(130, 290, 130, 25);

  noStroke();

  fill(42, 126, 25);
  ellipse(300, 95, 150, 150);
  ellipse(385, 170, 130, 150);
  ellipse(435, 85, 175, 150);
  ellipse(465, 145, 100, 115);
  ellipse(480, 0, 250, 230);

  fill(32, 116, 15);
  ellipse(350, 15, 120, 150);
  ellipse(435, 85, 175, 150);
  ellipse(300, 160, 95, 80);
  ellipse(450, 205, 85, 90);

  fill(255, 255, 255);
  ellipse(130, 235, 85, 120);

  fill(255, 255, 255);
  rect(30, 95, 175, 60, 5);

  fill(0, 0, 0);
  textSize(30);
  text("START", 70, 135);
  pop();
}

function gameScreen() {
  scenery();
  for (let crack of cracks) {
    updateCrack(crack);
    drawCrack(crack);
  }
  egg(230, eggY);

  if (keyIsDown(38)) {
    velocity = velocity - 0.2;
    wind(0, eggY, windStrength);
    wind(-50, eggY + 50, windStrength);
    wind(50, eggY + 20, windStrength);
  }
  if (gameOver) {
    textLose();
  }
  if (gameWon) {
    textWin();
  }
}

function endScreenLose() {
  push();
  background("skyblue");
  noStroke();
  fill("green");
  rect(0, 325, width, 75);

  fill(255, 210, 60);
  ellipse(245, 358, 400, 75);

  fill(255, 255, 255);
  translate(250, 270);
  rotate(45);
  ellipse(0, 0, 165, 200);
  pop();
  strokeWeight(3);
  stroke(0, 0, 0);
  line(342, 275, 300, 255);
  line(300, 255, 300, 225);

  line(193, 210, 240, 220);
  line(240, 220, 240, 295);
  line(240, 295, 315, 322);

  line(162, 250, 195, 280);
  line(195, 280, 210, 320);

  noStroke();
  fill(255, 192, 203);
  rect(175, 80, 150, 45, 5);

  fill(0, 0, 0);
  textSize(20);
  text("Try again", 209, 109);
}

function endScreenWin() {
  push();
  background("skyblue");
  noStroke();
  fill("green");
  rect(0, 325, width, 75);

  fill(255, 255, 255);
  ellipse(250, 300, 75, 100);
  pop();

  noStroke();
  fill(255, 192, 203);
  rect(175, 75, 150, 45, 5);

  fill(0, 0, 0);
  textSize(20);
  text("PLAY AGAIN", 191, 104);
}

function endScreen() {
  if (gameOver) {
    endScreenLose();
  } else if (gameWon) {
    endScreenWin();
  }
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

  stroke(229, 204, 98);
  fill(229, 204, 98);
  ellipse(230, 144, 35, 5);
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
    strokeWeight(1);
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

function wind(x, y, strength) {
  stroke(211, 211, 211);
  noFill();
  beginShape();
  strokeWeight(1);
  vertex(220 + x + strength, y + 20);
  bezierVertex(
    300 + x + strength,
    y + 25,
    150 + x + strength,
    y + 30,
    250 + x + strength,
    y + 30
  );
  endShape();
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
  push();
  textSize(55);
  textAlign(CENTER, CENTER);
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(0);
  textStyle(BOLD);
  text("Game Over", 250, 200);
  pop();
}

function textWin() {
  push();
  textSize(55);
  textAlign(CENTER, CENTER);
  stroke(0, 255, 0);
  strokeWeight(3);
  fill(0);
  textStyle(BOLD);
  text("You Win!", 250, 200);
  pop();
}

// function tryAgainButton(x, y, w, h) {
//   fill(255, 255, 255);
//   rect(x, y, w, h);

//   fill(0, 0, 0);
//   text("Try again", x + 25, y + 16);
// }

// function startButton(x, y, w, h) {
//   fill(255, 255, 255);
//   rect(x, y, w, h);

//   fill(0, 0, 0);
//   text("Start", x + 25, y + 16);
// }

// function draw() {
//   startScreen();
// }

let state = "start";

function draw() {
  // startScreen();
  // scenery();
  windStrength += 1;

  // if (
  //   mouseIsPressed &&
  //   mouseX > 200 &&
  //   mouseX < 300 &&
  //   mouseY > 247 &&
  //   mouseY < 253
  // ) {
  //   draw();
  // }

  // for (let crack of cracks) {
  //   updateCrack(crack);
  //   drawCrack(crack);
  // }

  // egg(230, eggY);

  if (gameIsRunning === true) {
    eggY = eggY + velocity;
    velocity = velocity + acceleration;

    if (windStrength > maxWindStrength) {
      windStrength = 0;
    }

    // if (keyIsDown(38)) {
    //   velocity = velocity - 0.2;
    //   wind(0, eggY, windStrength);
    //   wind(-50, eggY + 50, windStrength);
    //   wind(50, eggY + 20, windStrength);
    // }

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
      gameWon = true;
      console.log("You win!");
    }
  }
  // if (gameOver) {
  //   textLose();
  // }

  // if (endScreen) {
  //   tryAgainButton(200, 250, 100, 25);
  // }

  // if (gameWon) {
  //   textWin();
  // }

  //     push();
  // background("skyblue");
  // noStroke();
  // fill("green");
  // rect(0, 325, width, 75);

  // fill(255, 255, 255);
  // ellipse(250, 300, 75, 100);
  // pop();

  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "end") {
    endScreen();
  }
}

function mouseClicked() {
  if (state === "start") {
    if (mouseX > 30 && mouseX < 205 && mouseY > 95 && mouseY < 155) {
      state = "game";
      gameIsRunning = true;
    }
  } else if (state === "game") {
    state = "end";
  } else if (state === "end") {
    if (mouseX > 175 && mouseX < 325 && mouseY > 80 && mouseY < 125) {
      eggY = 135;
      velocity = 1;
      gameOver = false;
      gameWon = false;
      gameIsRunning = true;
      rotateEgg = false;
      windStrength = -85;
      cracks = [];
      state = "game";
    }
  }
}

// TO DO:
// make caps on try again button
// change color on buttons
// decide how to move between gameover/you win screen to end screen
// fix github pages
