import Phaser from 'phaser'

import "../lib/phaser-state-transition-plugin"

export default class extends Phaser.State {
  init () {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    game.scale.pageAlignVertically = true
    game.scale.pageAlignHorizontally = true
    game.stateTransition = game.plugins.add(Phaser.Plugin.StateTransition)
  }

  preload () {
    this.load.image('loaderBg', 'images/loader-bg.png')
    this.load.image('loaderBar', 'images/loader-bar.png')
  }

  render () {
    this.state.start('Load')
  }
}
