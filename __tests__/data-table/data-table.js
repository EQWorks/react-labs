import React from 'react'
import renderer from 'react-test-renderer'
import DataTable from '../../src/data-table';


describe('<DataTable/>', () => {
  it('should render successfully', async () => {
    let data = {
      data: [],
      isPercentage: false
    }

    const component = renderer.create(
      <DataTable {...data} />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
