export default class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {
    this.load.image('background', 'images/background.jpg');
    this.load.image('player', 'images/penguin.png');
    this.load.image('virus', 'images/virus.png');
  }

  create() {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);
    bg.setScale(0.8);
    this.player = this.physics.add.sprite(690, 550, 'player');
    this.player.setScale(0.2);
    this.player.setCollideWorldBounds(true);
    this.virus = this.physics.add.group({
      key: 'virus',
      setScale: { x: 0.5, y: 0.5 },
      gravityY: 0,
      collideWorldBounds: true,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.controlPlayer();
  }

  controlPlayer() {
    console.log(this.player.y);
    if (this.cursors.up.isDown && this.player.y > 570) {
      this.player.setVelocityY(-500);
      return;
    }

    if (this.cursors.right.isDown) {
      this.player.setVelocityX(100);
      return;
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-100);
      return;
    }

    this.player.setVelocityX(0);
  }
}
