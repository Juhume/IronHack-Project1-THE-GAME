var ScoreBoard = {
  ctx: undefined,
  init: function(ctx) {
    ctx.font = "30px arial";
    this.ctx = ctx;
  },
  update: function(score) {
    this.ctx.fillStyle = "Blue";
    this.ctx.fillText(Math.floor(score), 50, 50);
  }
};
