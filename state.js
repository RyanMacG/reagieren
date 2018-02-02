export default class State {
  constructor(lifeCycle) {
    this.lifeCycle = lifeCycle
  }

  set(newState) {
    Object.assign(this, newState)
    this.lifeCycle.dirty()
  }
}
