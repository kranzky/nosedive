import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor ({ game, x, y, asset }) {
    super(game, parent, "stars")
    this.game = game
    // TODO: add sprites here
  }

  update () {
  }
}
