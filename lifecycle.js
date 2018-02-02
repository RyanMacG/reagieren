import renderer from './renderer'
import State from './state'

export default class LifeCycle {
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

