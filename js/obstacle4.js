class Obstacle4 {
  constructor(w, playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 20;
    this.h = this.w * 2;
    this.dx = 20;
    this.x = w;
    this.y = playerY + playerH - this.h - 72;

  this.img = new Image();
  this.img.src = "img/css3.png";


}

draw() {
  this.ctx.drawImage(this.img, this.x, this.y);
}


  move() {
    this.x -= this.dx;
  }

}