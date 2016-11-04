import Phaser from 'phaser'

import Touch from '../helpers/Touch'
import Face from '../sprites/Face'
import Stars from '../sprites/Stars'

export default class extends Phaser.State {
  create () {
    let background = this.game.add.graphics(0, 0);
    background.beginFill(0x87616D, 1);
    background.drawRect(0, 0, this.game.width, this.game.height);
    background.endFill();

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

    this.touch = new Touch(game)
  }

  update () {
    this.touch.update()
    let direction = this.touch.getDirection()
    switch(direction.key) {
      case Phaser.KeyCode.LEFT:
        this.stars.dec(direction.x, direction.y)
        break
      case Phaser.KeyCode.RIGHT:
        this.stars.inc(direction.x, direction.y)
        break
      case Phaser.KeyCode.UP:
        if (this.touch.isSwiping() && direction.y > this.game.world.centerY && this.stars.score() > 0) {
          this.game.stateTransition.configure({
            duration: Phaser.Timer.SECOND * 0.8,
            ease: Phaser.Easing.Bounce.Out,
              properties: {
                y: "-800",
              }
          })
          this.game.stateTransition.to('Done', true, false, this.stars.score())
        }
        break
    }
  }
}
