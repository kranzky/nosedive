import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    let background = this.game.add.graphics(0, 0)
    background.beginFill(0, 1)
    background.drawRect(0, 0, this.game.width, this.game.height)
    background.endFill()
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBg.anchor.setTo(0.5)
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    this.loaderBar.anchor.setTo(0.5)
    this.game.load.setPreloadSprite(this.loaderBar)
    this.game.load.image('face0', 'images/bear.png')
    this.game.load.image('face1', 'images/1face.png')
    this.game.load.image('face2', 'images/2face.png')
    this.game.load.image('face3', 'images/3face.png')
    this.game.load.image('face4', 'images/4face.png')
    this.game.load.image('face5', 'images/5face.png')
    this.game.load.image('star0', 'images/nostar.png')
    this.game.load.image('star1', 'images/star.png')
    this.game.load.audio('bell1', ['sounds/nosedive_1_star.mp3', 'sounds/nosedive_1_star.m4a'])
    this.game.load.audio('bell2', ['sounds/nosedive_2_stars.mp3', 'sounds/nosedive_2_stars.m4a'])
    this.game.load.audio('bell3', ['sounds/nosedive_3_stars.mp3', 'sounds/nosedive_3_stars.m4a'])
    this.game.load.audio('bell4', ['sounds/nosedive_4_stars.mp3', 'sounds/nosedive_4_stars.m4a'])
    this.game.load.audio('bell5', ['sounds/nosedive_5_stars.mp3', 'sounds/nosedive_5_stars.m4a'])
    window.hideSpinner()
  }

  create () {
    this.game.stateTransition.configure({
      duration: Phaser.Timer.SECOND * 0.3,
      ease: Phaser.Easing.Linear.None,
        properties: {
          alpha: 0
        }
    })
    this.game.stateTransition.to('Rate', true, false)
  }
}
