import Phaser from 'phaser'

import Star from '../sprites/Star'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y }) {
    super(game, x, y)
    this.anchor.setTo(0.5)
    this._addStar(-160, 0)
    this._addStar(-80, 0)
    this._addStar(0, 0)
    this._addStar(80, 0)
    this._addStar(160, 0)
    this.value = 0
  }

  value () {
    return this.value
  }

  inc (x, y) {
    if (this.value > 4) {
      return
    }
    let star = this.children[this.value]
    if (star.getBounds().contains(x, y)) {
      this.value += 1
      star.setActive(true)
    }
  }

  dec (x, y) {
    if (this.value < 1) {
      return
    }
    let star = this.children[this.value-1]
    if (star.getBounds().contains(x, y)) {
      this.value -= 1
      star.setActive(false)
    }
  }

  _addStar (x, y) {
    let star = new Star({
      game: this.game,
      x: x,
      y: y
    })
    this.addChild(star)
  }
}
