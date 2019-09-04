class Obstacle {
  constructor(w, playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 15;
    this.h = this.w * 3;
    this.dx = 10;
    this.x = w;
    this.y = playerY + playerH - this.h - 20;
  }

  draw() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x -= this.dx;
  }

}

class Brains extends Obstacle {
  constructor(w, playerY, playerH, ctx) { 
  super(w, playerY, playerH, ctx,"img/51d1qVhmAmL.jpg")
  };
}