
var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  keys: {
    RIGHT: 39,
    SPACE: 32,
    LEFT: 37,
  },
  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    ScoreBoard.init(this.ctx);

    this.start();
  },
  start: function() {
    this.fps = 60;

    this.reset();

    this.interval = setInterval(() => {
      this.clear();

      this.framesCounter++;

      if (this.framesCounter > 900) {
        this.framesCounter = 0;
      }

      if (this.framesCounter % 70 === 0) {
        this.generateObstacle();
      }

      this.score += 0.01;

      this.moveAll();
      this.drawAll();

      this.clearObstacles();

      if (this.isCollision()) {
        this.gameOver();
      }
    }, 1300 / this.fps);
  },
  stop: function() {
    clearInterval(this.interval);
  },

  gameOver: function() {
    this.stop();

    if (confirm("Has palmado, ya sabes lo que toca... RULETA!")) {
       this.reset();
     }
  },
 
  reset: function() {
    this.background = new Background(this.canvas.width, this.canvas.height, this.ctx);
    this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys);
    this.scoreBoard = ScoreBoard;
    this.framesCounter = 0;
    this.obstacles = [];
    this.score = 0;
  },
  isCollision: function() {
   
    return this.obstacles.some(obstacle => {
      return (
        this.player.x + this.player.w >= obstacle.x &&
        this.player.x < obstacle.x + obstacle.w &&
        this.player.y + (this.player.h - 20) >= obstacle.y
      );
    });
  },
  clearObstacles: function() {
    this.obstacles = this.obstacles.filter(function(obstacle) {
      return obstacle.x >= 0;
    });
  },

  generateObstacle: function() {
    this.obstacles.push(
      new Obstacle(this.canvas.width, this.player.y0, this.player.h, this.ctx)
    );
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });
    this.drawTimer();
  },

  moveAll: function() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(function(obstacle) {
      obstacle.move();
    });
  },
  //pinta el marcador
  drawTimer: function() {
    this.scoreBoard.update(this.timer);
  }
};
