import renderer from '../renderer'

test('given a virtual DOM with an empty div element', () => {
  expect(
    renderer({
      type: 'div'
    })
  ).toBe('<div></div>')
});

test('given a virtual DOM with an empty span element', () => {
  expect(
    renderer({
      type: 'span'
    })
  ).toBe('<span></span>')
});
