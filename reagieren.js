import renderer from './renderer'
import LifeCycle from './lifecycle'

export default class Reagieren {
  static createElement(type, attributes, ...children) {
    return { type, props: attributes, children }
  }

  static render(virtualDom, presenter) {
    const lifeCycle = new LifeCycle(presenter)
    lifeCycle.begin(virtualDom)
  }
}
