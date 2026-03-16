let rotationX = 0;
let rotationY = 0;
let rotationZ = 0;

let positionX = 0;
let positionY = 0;
let positionZ = 0;

//WEBGL mode enables 3D rendering, runs once at program start
function setup() {
  createCanvas(820, 520, WEBGL);
}

function draw() {
  background(10, 10, 15);

  // Lights for better 3D look
  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, -1);

  // Apply translation, moves entire 3D cube
  translate(positionX, positionY, positionZ);

  // Apply rotation, Rotates the cube around each axis using the current angle values.
  rotateX(rotationX);
  rotateY(rotationY);
  rotateZ(rotationZ);

  // Draws a light-blue cube of size 120 at the origin (after rotation and translation).
  fill(100, 200, 255);
  stroke(255);
  strokeWeight(2);
  box(120);

  // Draw coordinate axes (Red=X, Green=Y, Blue=Z)
  drawAxes();

  // On-screen instructions
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text("Rotation: X Y Z keys (hold Shift for opposite)", -380, -220);
  text("Translation: Arrow keys or A S D F", -380, -190);
}

//Draws three colored lines from the origin to show the X, Y, and Z axes. This helps the user see the coordinate system.
function drawAxes() {
  strokeWeight(3);

  // X-axis (Red)
  stroke(255, 80, 80);
  line(-300, 0, 0, 300, 0, 0);

  // Y-axis (Green)
  stroke(80, 255, 80);
  line(0, -300, 0, 0, 300, 0);

  // Z-axis (Blue)
  stroke(80, 80, 255);
  line(0, 0, -300, 0, 0, 300);
}

function keyPressed() {
  const rotationSpeed = 0.1;
  const translationAmount = 15;

  if (key === "x" || key === "X") rotationX += rotationSpeed;
  if (key === "y" || key === "Y") rotationY += rotationSpeed;
  if (key === "z" || key === "Z") rotationZ += rotationSpeed;

  if (key === "X") rotationX -= rotationSpeed;
  if (key === "Y") rotationY -= rotationSpeed;
  if (key === "Z") rotationZ -= rotationSpeed;

  // Translation
  if (keyCode === LEFT_ARROW || key === "a" || key === "A")
    positionX -= translationAmount;
  if (keyCode === RIGHT_ARROW || key === "d" || key === "D")
    positionX += translationAmount;
  if (keyCode === UP_ARROW || key === "w" || key === "W")
    positionY -= translationAmount;
  if (keyCode === DOWN_ARROW || key === "s" || key === "S")
    positionY += translationAmount;
  if (key === "f" || key === "F") positionZ -= translationAmount;
  if (key === "g" || key === "G") positionZ += translationAmount;
}
