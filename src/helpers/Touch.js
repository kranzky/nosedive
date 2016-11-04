export default class {
  constructor (game) {
    this.game = game
    this.duration = 0
    this.swiping = false
    this.tapped = false
  }

  isTapped() {
    return this.tapped
  }

  isSwiping() {
    return this.swiping
  }

  getDirection() {
  }

  within(bounds) {
    let finger = this.game.input.activePointer
    return bounds.contains(finger.x, finger.y)
  }

  update () {
    let finger = this.game.input.activePointer
    this.tapped = false
    if (finger.duration == -1) {
      if (this.duration > 0 && this.duration < 300) {
        this.tapped = true
      }
      this.duration = 0
    } else {
      this.duration = finger.duration
      // TODO: calculate swipe direction
    }
  }
}
