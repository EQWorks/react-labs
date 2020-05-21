import React from 'react'
import renderer from 'react-test-renderer'
import WidgetTrend from '../../src/widget-trend';

beforeEach(() => {
  jest.spyOn(console, 'error')
  jest.spyOn(console, 'warn')
})

afterEach(() => {
  /* eslint-disable no-console */
  expect(console.error).not.toBeCalled()
  expect(console.warn).not.toBeCalled()
})

describe('<WidgetTrend/>', () => {
  it('should render successfully', async () => {
    let data = {
      title: 'Untitled',
      value: 'N/A',
      percentage: 'N/A'
    }

    const component = renderer.create(
      <WidgetTrend {...data} />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // Default Props - Missing Cases
  it.each([
    {},
    { title: 'Untitled' },
    { percentage: 10 },
  ])('Checking missing prop case for %p', (props) => {
    const component = renderer.create(
      <WidgetTrend {...props} />
    )
    const componentInstance = component.root
    expect(componentInstance.props).not.toBe(props)
  })

  // Default Props - Valid Cases
  it.each([
    { title: '', value: '', percentage: '' }, // empty values
    { title: 'Test', value: 'N/A', percentage: 'N/A' }, // default values
    { title: 'Test', value: 15, percentage: 10 }, // percantage and value non-default prop value
    { title: 'Test', value: 'N/A', percentage: 0 }, // percantage and value non-default prop value
  ])('Checking passing case for %p', (props) => {
    const component = renderer.create(
      <WidgetTrend {...props} />
    )
    const componentInstance = component.root
    expect(componentInstance.props).toStrictEqual(props)
  })
})
