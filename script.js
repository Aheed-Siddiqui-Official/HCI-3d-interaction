let rotationX = 0;
let rotationY = 0;
let rotationZ = 0;

let positionX = 0;
let positionY = 0;
let positionZ = 0;

function setup() {
  createCanvas(820, 520, WEBGL);
}

function draw() {
  background(10, 10, 15);

  // Lights for better 3D look
  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, -1);

  // Apply translation
  translate(positionX, positionY, positionZ);

  // Apply rotation
  rotateX(rotationX);
  rotateY(rotationY);
  rotateZ(rotationZ);

  // Draw cube
  fill(100, 200, 255);
  stroke(255);
  strokeWeight(2);
  box(120);

  // Draw axes
  drawAxes();

  // On-screen instructions
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text("Rotation: X Y Z keys (Shift for opposite)", -380, -220);
  text("Translation: Arrow keys or W/A/S/D, F/G for Z", -380, -190);

  // Optional: Display current rotation and position
  text(`Position: X=${positionX}, Y=${positionY}, Z=${positionZ}`, -380, -160);
  text(
    `Rotation: X=${rotationX.toFixed(2)}, Y=${rotationY.toFixed(2)}, Z=${rotationZ.toFixed(2)}`,
    -380,
    -130,
  );
}

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

  // ROTATION
  if (key === "x") rotationX += rotationSpeed;
  if (key === "X") rotationX -= rotationSpeed;
  if (key === "y") rotationY += rotationSpeed;
  if (key === "Y") rotationY -= rotationSpeed;
  if (key === "z") rotationZ += rotationSpeed;
  if (key === "Z") rotationZ -= rotationSpeed;

  // TRANSLATION
  // TRANSLATION
  if (keyCode === LEFT_ARROW || key === "a" || key === "A")
    positionX -= translationAmount;
  if (keyCode === RIGHT_ARROW || key === "d" || key === "D")
    positionX += translationAmount;

  // UP should visually go up → decrease Y in WEBGL
  if (keyCode === UP_ARROW || key === "w" || key === "W")
    positionY -= translationAmount;
  if (keyCode === DOWN_ARROW || key === "s" || key === "S")
    positionY += translationAmount;

  // Z-axis stays the same
  if (key === "f" || key === "F") positionZ -= translationAmount; // toward camera
  if (key === "g" || key === "G") positionZ += translationAmount; // away from camera
}
