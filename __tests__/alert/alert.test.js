import React from 'react'
import { render } from '@testing-library/react'

import Alert from '../../src/alert'

describe('render', () => {
  it('should render ok with least props passed', () => {
    const { getByTestId } = render(<Alert message='My Alert' severity='success' />)
    const alert = getByTestId('alert')
    // snapshot matches
    expect(alert).toMatchSnapshot()
    // message matches
    expect(alert.getElementsByClassName('MuiAlert-message')[0].textContent).toBe('My Alert')
    // success severity & standard variant
    expect(alert.firstChild).toHaveClass('MuiAlert-standardSuccess')
    // no header
    expect(alert.getElementsByClassName('MuiAlertTitle-root')[0]).toBeUndefined()
    // 100% width
    expect(alert).toHaveStyle('width: 100%')
  })
})

describe('header', () => {
  it('should have a header', () => {
    const { getByTestId } = render(<Alert header='My Header' message='My Alert' severity='success' />)
    expect(getByTestId('alert').getElementsByClassName('MuiAlertTitle-root')[0].textContent).toBe('My Header')
  })

  it('should not have a header', () => {
    const { getByTestId } = render(<Alert message='My Alert' severity='success' />)
    expect(getByTestId('alert').getElementsByClassName('MuiAlertTitle-root')[0]).toBeUndefined()
  })
})

describe('severity', () => {
  it.each([
    ['error', 'MuiAlert-standardError'],
    ['info', 'MuiAlert-standardInfo'],
    ['warning', 'MuiAlert-standardWarning'],
    ['success', 'MuiAlert-standardSuccess'],
  ])('should be %p', (severity, muiClass) => {
    const { getByTestId } = render(<Alert message='My Alert' severity={severity} />)
    expect(getByTestId('alert').firstChild).toHaveClass(muiClass)
  })
})

describe('variant', () => {
  it.each([
    ['standard', 'MuiAlert-standardSuccess'],
    ['outlined', 'MuiAlert-outlinedSuccess'],
    ['filled', 'MuiAlert-filledSuccess'],
  ])('should be %p', (variant, muiClass) => {
    const { getByTestId } = render(<Alert message='My Alert' severity='success' variant={variant} />)
    expect(getByTestId('alert').firstChild).toHaveClass(muiClass)
  })
})

describe('width', () => {
  it.each([
    ['50%'],
    ['100%'],
    ['50px'],
    ['100px'],
    ['3em'],
    ['6em'],
  ])('should be %p', (width) => {
    const { getByTestId } = render(<Alert message='My Alert' severity='success' width={width} />)
    expect(getByTestId('alert')).toHaveStyle(`width: ${width}`)
  })
})
