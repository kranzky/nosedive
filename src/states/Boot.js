import Phaser from 'phaser'
import WebFont from 'webfontloader'

import "../lib/phaser-state-transition-plugin"

export default class extends Phaser.State {
  init () {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    game.scale.pageAlignVertically = true
    game.scale.pageAlignHorizontally = true
    game.stateTransition = game.plugins.add(Phaser.Plugin.StateTransition)
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    this.load.image('loaderBg', 'images/loader-bg.png')
    this.load.image('loaderBar', 'images/loader-bar.png')
    WebFont.load({
      google: {
        families: ['Lato']
      },
      active: this.fontsLoaded
    })
  }

  render () {
    if (this.fontsReady) {
      this.state.start('Load')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
