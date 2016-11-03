import Phaser from 'phaser'
import WebFont from 'webfontloader'
import 'phaser-state-transition-plugin'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#87616D'
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    game.scale.pageAlignVertically = true
    game.scale.pageAlignHorizontally = true
    game.stateTransition = game.plugins.add(Phaser.Plugin.StateTransition)
    game.stateTransition.configure({
      duration: Phaser.Timer.SECOND * 1.5,
      ease: Phaser.Easing.Bounce.Out,
			properties: {
				alpha: 1,
				x: 1,
				y: 1
			}
    })
  }

  preload () {
    this.load.image('loaderBg', 'images/loader-bg.png')
    this.load.image('loaderBar', 'images/loader-bar.png')
  }

  render () {
    this.state.start('Splash')
  }
}
