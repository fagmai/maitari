//car code

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [2, 2.5, 3.2, 5, 3.3, 2.3];

//car 1
let wCar = 50;
let hCar = 40;

function showCar () {
  for (let i = 0; i < carImages.length; i++) {
    image (carImages [i], xCars [i], yCars [i], wCar, hCar);
  }
}

function moveCar () {
  for (let i = 0; i < carImages.length; i++) {
    xCars [i] -= speedCars [i];
  }
}

function returnCarFirstPosition () {
  for (let i = 0; i < carImages.length; i++) {
    if (crossedAllScreen (xCars [i])) {
      xCars [i] = 600;
    }
  }
}

function crossedAllScreen (xCars) {
 return xCars < - 50;
}


