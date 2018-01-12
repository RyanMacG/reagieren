import Reagieren from '../reagieren'
import renderer from '../renderer'

describe('Rendering virtualDom', () => {

  function expectRenders(expected, virtualDom) {
    const presenter = jest.fn()
    Reagieren.render(virtualDom, presenter)
    expect(presenter).toBeCalledWith(expected)
  }

  describe('given an empty element', () => {
    test('renders an empty div element', () => {
      expectRenders('<div></div>', <div></div>)
    });

    test('renders an empty span element', () => {
      expectRenders('<span></span>', <span></span>)
    });

    describe('given attributes', () => {
      test('renders a div with an id of foo', () => {
        expectRenders(
          '<div id="foo"></div>', 
          <div id="foo"></div>
        )
      });

      test('renders a div with a title of qux', () => {
        expectRenders(
          '<div title="qux"></div>', 
          <div title="qux"></div>
        )
      });

      test('renders a div with multiple attributes', () => {
        expectRenders(
          '<div title="qux" id="afh"></div>', 
          <div title="qux" id="afh"></div>
        )
      });
    })
  })

  describe('given a string element', () => {
    test("renders a p with Hello World text content", () => {
      expectRenders(
        '<p>Hello World</p>',
        <p>Hello World</p>
      )
    })

    test("renders a p with Foo Bar text content", () => {
      expectRenders(
        '<p>Foo Bar</p>',
        <p>Foo Bar</p>
      )
    })

    test("renders a div with a child span", () => {
      expectRenders(
        '<div><span>Foo Bar</span></div>',
        <div><span>Foo Bar</span></div>
      )
    })

    test("renders a div multiple child elements", () => {
      expectRenders(
        '<div><span>Foo <i>Bar</i></span></div>',
        <div><span>Foo <i>Bar</i></span></div>
      )
    })

    // test for adjacent elements
  })
});

