import Phaser from 'phaser'

const frames = {
  false: "star0",
  true: "star1"
}

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.game = game
    this.anchor.setTo(0.5)
    this.setActive(false)
    this.scale.set(0.6)
  }

  setActive (active) {
    this.active = active
    this.loadTexture(frames[active])
  }
}
