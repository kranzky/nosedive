import Phaser from 'phaser'
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
      y: 0.55 * this.game.world.centerY,
      asset: 'face0'
    })

    this.game.add.existing(this.face)

    this.star = new Star({
      game: this.game,
      x: this.game.world.centerX,
      y: 1.7 * this.game.world.centerY,
      asset: 'star0'
    })

    this.game.add.existing(this.star)
  }

  render () {
  }
}
