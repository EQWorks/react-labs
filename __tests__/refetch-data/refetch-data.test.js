import React from 'react'
import { render } from '@testing-library/react'

import { RefetchData } from '../../src'

describe('render', () => {
  it('should render ok with least props passed', () => {
    const { getByTestId } = render(<RefetchData />)
    const refetchData = getByTestId('refetch-data')
    // snapshot matches
    expect(refetchData).toMatchSnapshot()
    // not disabled
    expect(refetchData).not.toHaveAttribute('disabled')
  })
})
