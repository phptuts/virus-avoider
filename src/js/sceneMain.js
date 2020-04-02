export default class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {
    this.load.image('background', 'images/background.jpg');
  }

  create() {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);
    bg.setScale(0.8);
  }

  update() {}
}
