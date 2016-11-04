import Phaser from 'phaser'

import Touch from '../helpers/Touch'
import Face from '../sprites/Face'
import Stars from '../sprites/Stars'

const sounds = {
  1: "bell1",
  2: "bell2",
  3: "bell3",
  4: "bell4",
  5: "bell5"
}

export default class extends Phaser.State {
  init (score) {
    this.score = score
  }

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

    this.tween = this.game.add.tween(this.face.scale).to({ x: 2.1, y: 2.1 }, 100, Phaser.Easing.Circular.InOut);

    this.stars = new Stars({
      game: this.game,
      x: this.game.world.centerX,
      y: 1.7 * this.game.world.centerY
    })
    this.game.add.existing(this.stars)

		this.face.setScore(this.score)
		this.stars.setScore(this.score)
    this.sound = new Phaser.Sound(this.game, sounds[this.score])
    this.sound.play()

    this.touch = new Touch(game)
  }

  update () {
    this.touch.update()
    if (this.touch.isTapped()) {
      if (this.touch.within(this.face.getBounds())) {
        this.sound.play()
        this.tween.start();
      } else {
        this.game.stateTransition.to('Rate', true, false)
      }
    }
  }
}
