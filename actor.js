//actor code
let yActor = 366;
let xActor = 85;
let collision = false;
let myScore = 0;

function showActor () {
  image (actorImage, xActor, yActor, 30, 30);
}

function moveActor () {
  if (keyIsDown (87))
    yActor -= 3;
  if (keyIsDown (83))
    if (itCanMove ()) {
    yActor += 3;
    }
}

function verifyCollision () {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carImages.length; i++) {
  collision = collideRectCircle (xCars [i], yCars [i], wCar, hCar, xActor, yActor, 15);
    if (collision) {
      returnActorToFirstPosition ();
      collisionSound.play ();
      if (scoreGreaterThanZero ()) {
      myScore -= 1;
      }
    }
  }
}

function returnActorToFirstPosition () {
  yActor = 366;
}

function includeScore () {
  textAlign (CENTER);
  textSize (25);
  fill (255,215,0);
  text (myScore, width / 5, 25);
}

function countScore () {
  if (yActor < 15) {
    myScore += 1;
    returnActorToFirstPosition ();
    scoreSound.play ();
  }
}

function scoreGreaterThanZero () {
  return myScore > 0;
}

function itCanMove () {
  return yActor < 366;
}