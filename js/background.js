class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.img = new Image();
    this.img.src = "img/2048x1546.png";
    this.h = h
    this.w = w

    this.x = 0;
    this.y = 0;

    this.dx = 5;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.ctx.drawImage(
      this.img,
      this.x + this.w,
      this.y,
      this.w,
      this.h
    );
      this.ctx.fillText("But hey Ironhacker! Don't forget to smile 😁", this.w / 4.5, this.h / 9.6);
  }

  move() {
    this.x -= this.dx;

    if (this.x < -this.w) this.x = 0;
  }
}
