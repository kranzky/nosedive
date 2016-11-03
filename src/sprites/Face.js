import Phaser from 'phaser'

const frames = {
  0: "face0",
  1: "face1",
  2: "face2",
  3: "face3",
  4: "face4",
  5: "face5"
}

export default class extends Phaser.Sprite {
  constructor ({ game, x, y }) {
    super(game, x, y)
    this.game = game
    this.anchor.setTo(0.5)
    this.scale.setTo(2)
    this.setScore(0)
  }

  setScore (score) {
    this.score = score
    this.loadTexture(frames[score])
  }
}
