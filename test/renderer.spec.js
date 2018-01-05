import renderer from '../renderer'

describe('Rendering virtualDom', () => {

  function expectRenders(expected, virtualDom) {
    expect(renderer(virtualDom)).toBe(expected)
  }

  describe('given an empty element', () => {
    test('renders an empty div element', () => {
      expectRenders('<div></div>', { type: 'div' })
    });

    test('renders an empty span element', () => {
      expectRenders('<span></span>', { type: 'span' })
    });

    describe('given attributes', () => {
      test('renders a div with an id of foo', () => {
        expectRenders(
          '<div id="foo"></div>', 
          { type: 'div', props: { id: 'foo' } }
        )
      });

      test('renders a div with an id of bar', () => {
        expectRenders(
          '<div id="bar"></div>', 
          { type: 'div', props: { id: 'bar' } }
        )
      });

      test('renders a div with a title of qux', () => {
        expectRenders(
          '<div title="qux"></div>', 
          { type: 'div', props: { title: 'qux' } }
        )
      });

      test('renders a div with multiple attributes', () => {
        expectRenders(
          '<div title="qux" id="afh"></div>', 
          { type: 'div', props: { title: 'qux', id: 'afh' } }
        )
      });
    })
  })

  describe('given a string element', () => {
    test("renders a p with Hello World text content", () => {
      expectRenders(
        '<p>Hello World</p>',
        { type: 'p', children: ['Hello World'] }
      )
    })

    test("renders a p with Foo Bar text content", () => {
      expectRenders(
        '<p>Foo Bar</p>',
        { type: 'p', children: ['Foo Bar'] }
      )
    })
  })
});

