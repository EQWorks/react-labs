import React from 'react'
import renderer from 'react-test-renderer'
import WidgetTrend from '../../src/widget-trend';


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
})
