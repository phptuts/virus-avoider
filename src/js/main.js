console.log('hello world');
import Phaser from 'phaser';
import sceneMain from './sceneMain';
window.game;
window.onload = function () {
  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-game',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
      },
    },
    scene: [sceneMain],
  };

  window.game = new Phaser.Game(config);
};
