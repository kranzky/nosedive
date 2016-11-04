export default class {
  constructor (game) {
    this.game = game
    this.direction = 0
    this.duration = 0
    this.swiping = false
    this.tapped = false
    this.position = null
    this.north = new Phaser.Point(0, 1)
  }

  isTapped() {
    return this.tapped
  }

  isSwiping() {
    return this.swiping
  }

  getDirection() {
    let finger = this.game.input.activePointer
    return {
      key: this.direction,
      x: finger.x,
      y: finger.y
    }
  }

  within(bounds) {
    let finger = this.game.input.activePointer
    return bounds.contains(finger.x, finger.y)
  }

  update () {
    let finger = this.game.input.activePointer
    this.tapped = false
    this.direction = 0
    if (finger.duration == -1) {
      if (this.duration > 0 && this.duration < 300) {
        this.tapped = true
      }
      this.position = null
      this.duration = 0
      this.swiping = false
    } else {
      this.duration = finger.duration
      if (this.position) {
        let delta = Phaser.Point.subtract(finger.position, this.position)
        let speed = delta.getMagnitude()
        let dot = delta.normalize().dot(this.north)
        if (dot > 0.7) {
          this.direction = Phaser.KeyCode.DOWN
        } else if (dot < -0.7) {
          this.direction = Phaser.KeyCode.UP
        } else if (speed > 0 && dot < 0.3 && dot > -0.3) {
          if (delta.x > 0) {
            this.direction = Phaser.KeyCode.RIGHT
          } else if (delta.x < 0) {
            this.direction = Phaser.KeyCode.LEFT
          }
        }
        this.swiping = (speed > 30)
      }
      this.position = finger.position.clone()
    }
  }
}
