let ScoreBoard = {
  ctx: undefined,
  init: function (ctx) {
    ctx.font = "55px sans-serif";
    this.ctx = ctx;
  },
  update: function (score) {
    this.ctx.fillStyle = "brown";
    this.ctx.fillText(Math.floor(score), 1800, 80);
  }
};