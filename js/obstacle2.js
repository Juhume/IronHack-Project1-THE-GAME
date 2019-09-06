class Obstacle2 {
  constructor(w, playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 9;
    this.h = this.w * 3;
    this.dx = 7;
    this.x = w;
    this.y = playerY + playerH - this.h - 20;

  this.img = new Image();
  this.img.src = "img/js.png";


}

draw() {
  this.ctx.drawImage(this.img, this.x, this.y);
}


  move() {
    this.x -= this.dx;
  }

}