import React from 'react'
import renderer from 'react-test-renderer'
import DataTable from '../../src/deprecated/data-table'


beforeEach(() => {
  jest.spyOn(console, 'error')
  jest.spyOn(console, 'warn')
})

afterEach(() => {
  /* eslint-disable no-console */
  expect(console.error).not.toBeCalled()
  expect(console.warn).not.toBeCalled()
})

describe('<DataTable/>', () => {
  it('should render successfully', async () => {
    let data = {
      data: [],
      isPercentage: false,
    }

    const component = renderer.create(
      <DataTable {...data} />,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // Default Props - Missing Cases
  it.each([
    {}, // empty
    { data: [] }, // missing isPercentage
    { isPercentage: false }, // missing data
  ])('Checking failing case for %p', (props) => {
    const component = renderer.create(
      <DataTable {...props} />,
    )
    const componentInstance = component.root
    expect(componentInstance.props).not.toEqual(props)
  })

  // Default Props - Valid Cases
  it.each([
    { data: [], isPercentage: true }, // data: checking empty array, isPercentage: non-default prop value
    { data: [], isPercentage: false }, // data: checking empty array, isPercentage: default prop value
    { data: [{}], isPercentage: false }, // data: checking array of obj
  ])('Checking passing case for %p', (props) => {
    const component = renderer.create(
      <DataTable {...props} />,
    )
    const componentInstance = component.root
    expect(componentInstance.props).toStrictEqual(props)
  })
})
