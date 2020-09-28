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
    // no id
    expect(getByTestId('checkbox')).not.toHaveAttribute('for')
  })
})

describe('checked', () => {
  it('should not be checked', () => {
    const { getByTestId } = render(<Checkbox />)
    expect(getByTestId('checkbox').firstChild).not.toHaveClass('Mui-checked')
  })

  it('should be checked', () => {
    const { getByTestId } = render(<Checkbox checked />)
    expect(getByTestId('checkbox').firstChild).toHaveClass('Mui-checked')
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

describe('id', () => {
  it('should not have an id', () => {
    const { getByTestId } = render(<Checkbox />)
    expect(getByTestId('checkbox')).not.toHaveAttribute('for')
  })

  it('should have an id', () => {
    const { getByTestId } = render(<Checkbox id='my-id' />)
    expect(getByTestId('checkbox')).toHaveAttribute('for', 'my-id')
  })
})

describe('label', () => {
  it('should not have a label', () => {
    const { getByTestId } = render(<Checkbox />)
    expect(getByTestId('checkbox').textContent).toBeFalsy()
  })

  it('should have a label', () => {
    const { getByTestId } = render(<Checkbox label='my label' />)
    expect(getByTestId('checkbox').textContent).toBe('my label')
  })
})

describe('interaction', () => {
  it('should toggle checked status on input selection', () => {
    const { getByTestId } = render(<Checkbox />)
    const checkbox = getByTestId('checkbox')

    fireEvent.click(checkbox)
    expect(checkbox.firstChild).toHaveClass('Mui-checked')
    fireEvent.click(checkbox)
    expect(checkbox.firstChild).not.toHaveClass('Mui-checked')
  })
})
