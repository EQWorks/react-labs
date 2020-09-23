import React from 'react'
import { render } from '@testing-library/react'

import { Chip } from '../../src/index'

describe('render', () => {
  it('should render ok with minimal props passed', () => {
    const { getByTestId } = render(<Chip label='My Chip' />)
    const chip = getByTestId('chip')
    // snapshot
    expect(chip).toMatchSnapshot()
    // text content matches
    // expect(chip.textContent).toBe('my chip')
    // not loading
    // expect(chip).toHaveStyle('color: #FFFFFF')
    // not disabled
    // expect(chip).not.toBeDisabled()
    // medium size
    // expect(chip).not.toHaveClass('MuiButton-sizeSmall', 'MuiButton-sizeLarge')
    // primary type
    // expect(chip).toHaveAttribute('type', 'primary')
  })
})
