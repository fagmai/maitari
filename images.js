//game images
let roadImage;
let actorImage;
let carImage;
let carImage2;
let carImage3;

//game sounds
let soundtrack;
let collisionSound;
let scoreSound;

function preload () {
  roadImage = loadImage ("images/estrada.png");
  actorImage = loadImage ("images/ator-1.png");
  carImage = loadImage ("images/carro-1.png");
  carImage2 = loadImage ("images/carro-2.png");
  carImage3 = loadImage ("images/carro-3.png");
  carImages = [carImage, carImage2, carImage3, carImage, carImage2, carImage3]
 
  soundtrack = loadSound ("sounds/trilha.mp3");
  collisionSound = loadSound ("sounds/colidiu.mp3");
  scoreSound = loadSound ("sounds/pontos.wav");
}
