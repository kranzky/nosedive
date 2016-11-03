import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBg.anchor.setTo(0.5)
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    this.loaderBar.anchor.setTo(0.5)
    this.load.setPreloadSprite(this.loaderBar)
    this.load.image('face0', 'images/0face.png')
    this.load.image('face1', 'images/1face.png')
    this.load.image('face2', 'images/2face.png')
    this.load.image('face3', 'images/3face.png')
    this.load.image('face4', 'images/4face.png')
    this.load.image('face5', 'images/5face.png')
    this.load.image('star0', 'images/nostar.png')
    this.load.image('star1', 'images/star.png')
    this.load.audio('bell1', 'sounds/nosedive_1_star.mp3')
    this.load.audio('bell2', 'sounds/nosedive_2_stars.mp3')
    this.load.audio('bell3', 'sounds/nosedive_3_stars.mp3')
    this.load.audio('bell4', 'sounds/nosedive_4_stars.mp3')
    this.load.audio('bell5', 'sounds/nosedive_5_stars.mp3')
  }

  create () {
    this.state.start('Rate')
  }
}
