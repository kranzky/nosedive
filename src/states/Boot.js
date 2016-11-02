import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#87616D'
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    game.scale.pageAlignVertically = true
    game.scale.pageAlignHorizontally = true
  }

  preload () {
    this.load.image('loaderBg', 'images/loader-bg.png')
    this.load.image('loaderBar', 'images/loader-bar.png')
  }

  render () {
    this.state.start('Splash')
  }
}
