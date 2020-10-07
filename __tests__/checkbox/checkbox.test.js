import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Checkbox from '../../src/checkbox'

describe('render', () => {
  it('should render ok with no props passed', () => {
    const { getByTestId } = render(<Checkbox />)
    const checkbox = getByTestId('checkbox')
    // snapshot
    expect(checkbox).toMatchSnapshot()
    // text content matches
    expect(checkbox.textContent).toBeFalsy()
    // not checked
    expect(checkbox.firstChild).not.toHaveClass('Mui-checked')
    // not disabled
    expect(checkbox).not.toHaveClass('Mui-disabled')
  })
})

describe('checked', () => {
  it('should not be checked', () => {
    const { getByTestId } = render(<Checkbox />)
    expect(getByTestId('checkbox').firstChild).not.toHaveClass('Mui-checked')
  })

  it('should be checked', () => {
    const { getByTestId } = render(<Checkbox checked />)
    expect(getByTestId('checkbox')).toHaveClass('Mui-checked')
  })
})

describe('disabled', () => {
  it('should not be disabled', () => {
    const { getByTestId } = render(<Checkbox />)
    expect(getByTestId('checkbox')).not.toHaveClass('Mui-disabled')
  })

  it('should be disabled', () => {
    const { getByTestId } = render(<Checkbox disabled />)
    expect(getByTestId('checkbox')).toHaveClass('Mui-disabled')
  })
})

describe('interaction', () => {
  it('should toggle checked status on input selection', () => {
    const { getByTestId } = render(<Checkbox />)
    const checkbox = getByTestId('checkbox')

    fireEvent.click(checkbox.firstChild.firstChild)
    expect(checkbox).toHaveClass('Mui-checked')
    fireEvent.click(checkbox.firstChild.firstChild)
    expect(checkbox).not.toHaveClass('Mui-checked')
  })
})
