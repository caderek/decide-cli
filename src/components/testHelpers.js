import renderer from 'react-test-renderer'

export const snap = component => {
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
}
