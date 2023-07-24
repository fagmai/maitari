function setup() {
  createCanvas(500, 400);
  soundtrack.loop ();
}

function draw() {
  background(roadImage);
  showActor();
  showCar();
  moveCar();
  moveActor();
  returnCarFirstPosition();
  verifyCollision();
  includeScore();
  countScore();
}





