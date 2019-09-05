class Sound {
  constructor(src) {
    this.sound = new Audio(`${src}`);
  }
  play() {
    this.sound.play();
  }
}
class Die extends Sound {
    constructor() {
        super("img/smb_mariodie (online-audio-converter.com).mp3");
    }
}

