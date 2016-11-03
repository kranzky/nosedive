import Phaser from 'phaser'
import Swipe from 'phaser-swipe'

import Face from '../sprites/Face'
import Star from '../sprites/Star'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let banner = this.add.text(this.game.world.centerX, this.game.world.centerY, 'Nosedive')
    banner.font = 'Lato-Hairline'
    banner.fontSize = 70
    banner.fontWeight = 300
    banner.fill = '#222'
    banner.anchor.setTo(0.5, 0)

    this.face = new Face({
      game: this.game,
      x: this.game.world.centerX,
      y: 0.55 * this.game.world.centerY
    })

    this.game.add.existing(this.face)

    this.star = new Star({
      game: this.game,
      x: this.game.world.centerX,
      y: 1.7 * this.game.world.centerY
    })

    this.game.add.existing(this.star)

    this.swipe = new Swipe(this.game)
    this.swipe.dragLength = 20
    this.swipe.diagonalDisabled = true
  }

  render () {
  }

  update () {
    let direction = this.swipe.check()
    if (direction != null) {
      console.log(direction)
    }
  }
}
