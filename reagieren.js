import renderer from './renderer'


class State {
  constructor(lifeCycle) {
    this.lifeCycle = lifeCycle
  }

  set(newState) {
    Object.assign(this, newState)
    this.lifeCycle.dirty()
  }
}

class LifeCycle {
  constructor(presenter) {
    this.presenter = presenter
  }

  begin(virtualDom) {
    this.virtualDom = virtualDom

    this.render()
  }

  dirty() {
    this.render()
  }

  render(virtualDom) {
    this.presenter(renderer(this.virtualDom, this))
  }

  newState() {
    return new State(this)
  }
}

export default class Reagieren {
  static createElement(type, attributes, ...children) {
    return { type, props: attributes, children }
  }

  static render(virtualDom, presenter) {
    const lifeCycle = new LifeCycle(presenter)
    lifeCycle.begin(virtualDom)
  }
}
