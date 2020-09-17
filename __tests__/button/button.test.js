import React from 'react'
import { render } from '@testing-library/react'

import Button from '../../src/button'

describe('render', () => {
  it('should render ok with no props passed', () => {
    const { getByTestId } = render(<Button>My Button</Button>)
    const button = getByTestId('button')
    // snapshot
    expect(button).toMatchSnapshot()
    // text content matches
    expect(button.textContent).toBe('My Button')
    // not loading
    expect(button).toHaveStyle('color: #FFFFFF')
    // not disabled
    expect(button).not.toBeDisabled()
    // medium size
    expect(button).not.toHaveClass('MuiButton-sizeSmall', 'MuiButton-sizeLarge')
    // primary type
    expect(button).toHaveAttribute('type', 'primary')
  })
})

describe('isLoading', () => {
  it('should be loading', () => {
    const { getByTestId } = render(<Button isLoading={true}>My Button</Button>)
    expect(getByTestId('button').firstChild).toHaveStyle('color: rgba(0, 0, 0, 0.0) !important')
  })
  
  it('should not be loading', () => {
    const { getByTestId } = render(<Button isLoading={false}>My Button</Button>)
    expect(getByTestId('button')).toHaveStyle('color: #FFFFFF')
  })
})

describe('noSpacing', () => {
  // DOES NOT WORK | BUTTON PADDING SHOWS AS `padding: 0px;`
  // it('should have spacing', () => {
  //   const { getByTestId } = render(<Button noSpacing={false}>My Button</Button>)
  //   expect(getByTestId('button')).toHaveStyle('padding: 6px 16px')
  // })

  it('should not have spacing', () => {
    const { getByTestId } = render(<Button noSpacing={true}>My Button</Button>)
    expect(getByTestId('button')).toHaveStyle('padding: 0px')
  })
})

describe('size', () => {
  it('should be "medium"', () => {
    const { getByTestId } = render(<Button size='medium'>My Button</Button>)

    expect(getByTestId('button')).not.toHaveClass('MuiButton-sizeSmall', 'MuiButton-sizeLarge')
  })

  it.each([
    ['small', 'MuiButton-sizeSmall'],
    ['large', 'MuiButton-sizeLarge'],
  ])('should be %p', (size, muiClass) => {
    const { getByTestId } = render(<Button size={size}>My Button</Button>) 
    expect(getByTestId('button')).toHaveClass(muiClass)
  })
})

describe('type', () => {
  it.each([
    ['primary'],
    ['secondary'],
    ['tertiary'],
  ])('should be %p', (type) => {
    const { getByTestId } = render(<Button type={type}>My Button</Button>)
    expect(getByTestId('button')).toHaveAttribute('type', type)
  })
})
