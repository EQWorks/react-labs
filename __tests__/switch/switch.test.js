import React from 'react'
import { render } from '@testing-library/react'

import Switch from '../../src/switch'

describe('render', () => {
  it('should render ok with no props passed', () => {
    const { getByTestId } = render(<Switch />)
    const switchElement = getByTestId('switch')
    // snapshot
    expect(switchElement).toMatchSnapshot()
    // no checked
    expect(switchElement).not.toHaveClass('Mui-checked')
    // not disabled
    expect(switchElement).not.toHaveClass('Mui-disabled')
  })
})
