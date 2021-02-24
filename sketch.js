var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600, 400);

  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52)

  bullet = createSprite(20, 150, 30, 15);
  bullet.shapeColor = 'white';

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = rgb(80, 80, 80);

  bullet.velocityX = speed;

}

function draw() {
  background(200, 200, 200);


  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness)


  if (bullet.isTouching(wall)) {
  // if (wall.x - bullet.x < (bullet.width + wall.width) /2){
    bullet.velocityX = 0;

    if (damage < 10) {
      wall.shapeColor = rgb(0, 255, 0);
    }

    if (damage > 10) {
      wall.shapeColor = rgb(255, 0, 0);
    }

  }

  drawSprites();
}