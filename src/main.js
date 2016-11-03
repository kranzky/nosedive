import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import RateState from './states/Rate'
import DoneState from './states/Done'

class Game extends Phaser.Game {
  constructor () {
    super(450, 800, Phaser.AUTO, 'content', null, false, true, null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Rate', RateState, false)
    this.state.add('Done', DoneState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
