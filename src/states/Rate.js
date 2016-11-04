import Phaser from 'phaser'
import Swipe from 'phaser-swipe'

import Face from '../sprites/Face'
import Stars from '../sprites/Stars'

export default class extends Phaser.State {
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

    this.stars = new Stars({
      game: this.game,
      x: this.game.world.centerX,
      y: 1.7 * this.game.world.centerY
    })
    this.game.add.existing(this.stars)

    this.swipe = new Swipe(this.game)
    this.swipe.dragLength = 20
    this.swipe.diagonalDisabled = true
  }

  update () {
    let direction = this.swipe.check()
    if (direction != null) {
      switch(direction.direction) {
      case this.swipe.DIRECTION_LEFT:
        this.stars.dec(direction.x, direction.y)
        break
      case this.swipe.DIRECTION_RIGHT:
        this.stars.inc(direction.x, direction.y)
        break
      case this.swipe.DIRECTION_UP:
        if (this.stars.score() > 0) {
          this.game.stateTransition.to('Done', true, false, this.stars.score())
        }
        break
      }
    }
  }
}
