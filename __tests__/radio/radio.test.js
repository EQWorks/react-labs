import React from 'react'
import { render } from '@testing-library/react'

import Radio from '../../src/radio'

describe('render', () => {
  it('should render ok with no props passed', () => {
    const { getByTestId } = render(<Radio />)
    const radio = getByTestId('radio')
    // snapshot
    expect(radio).toMatchSnapshot()
  })
})
