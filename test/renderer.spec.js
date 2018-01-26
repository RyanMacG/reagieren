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

    test("renders a div with multiple child elements", () => {
      expectRenders(
        '<div><span>Foo <i>Bar</i></span></div>',
        <div><span>Foo <i>Bar</i></span></div>
      )
    })

    test("renders a div with adjacent elements", () => {
      expectRenders(
        '<div><span>Foo</span><span>Bar</span></div>',
        <div><span>Foo</span><span>Bar</span></div>
      )
    })

    test("renders a div with adjacent elements with children", () => {
      expectRenders(
        '<div><span>Foo</span><span><i>Bar</i></span></div>',
        <div><span>Foo</span><span><i>Bar</i></span></div>
      )
    })
  })

  describe("given a component", () => {
    test("can render a simple component", () => {
      const MyComponent = () => <div></div>
      expectRenders(
        '<div></div>',
        <MyComponent />
      )
    })

    test("can render a simple component with different elements", () => {
      const MyComponent = () => <span></span>
      expectRenders(
        '<span></span>',
        <MyComponent />
      )
    })

    test("can render components that contain other components", () => {
      const MyComponent = () => <div></div>
      const MySecondComponent = () => <span><MyComponent /></span>
      expectRenders(
        '<span><div></div></span>',
        <MySecondComponent />
      )
    })

    test("can render nested components", () => {
      const MyComponent = ({children}) => <div>{children}</div>
      const MySecondComponent = () => <span></span>
      expectRenders(
        '<div><span></span></div>',
        <MyComponent><MySecondComponent /></MyComponent>
      )
    })

    test("can render multiple nested components", () => {
      const MyComponent = ({children}) => <div>{children}</div>
      const MySecondComponent = () => <span></span>
      expectRenders(
        '<div><span></span><span></span></div>',
        <MyComponent><MySecondComponent /><MySecondComponent /></MyComponent>
      )
    })

    test("can render multiple nested components and elements", () => {
      const MyComponent = ({children}) => <div>{children}</div>
      const MySecondComponent = () => <span></span>
      expectRenders(
        '<div><span></span><span></span>hello</div>',
        <MyComponent><MySecondComponent /><MySecondComponent />hello</MyComponent>
      )
    })
  })
});

