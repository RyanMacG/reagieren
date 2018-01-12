import renderer from './renderer'


export default class Reagieren {
  static createElement(type, attributes, ...children) {
    return { type, props: attributes, children }
  }

  static render(thingWotIsRendered, presenter) {
    presenter(renderer(thingWotIsRendered))
  }
}
