import Phaser from 'phaser'

const frames = {
  false: "star0",
  true: "star1"
}

export default class extends Phaser.Sprite {
  constructor ({ game, x, y }) {
    super(game, x, y)
    this.anchor.setTo(0.5)
    this.scale.set(0.6)
    this.tweenUp = this.game.add.tween(this.scale).to({ x: 0.7, y: 0.7 }, 100, Phaser.Easing.Bounce.InOut, false, 0, 0, true)
    this.tweenDown = this.game.add.tween(this.scale).to({ x: 0.5, y: 0.5 }, 100, Phaser.Easing.Bounce.InOut, false, 0, 0, true)
    this.setActive(false)
  }

  setActive (active) {
    this.active = active
    this.loadTexture(frames[active])
    if (active) {
      this.tweenUp.start()
    } else {
      this.tweenDown.start()
    }
  }
}
