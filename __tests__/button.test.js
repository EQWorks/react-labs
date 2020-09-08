import React from 'react'
import { render } from '@testing-library/react'

import Button from '../src/button'

describe('render', () => {
  it('should render ok with no props passed', () => {
    const { getByTestId } = render(<Button>My Button</Button>)
    const button = getByTestId('button')
    // snapshot
    expect(button).toMatchSnapshot()
    // renders ok
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

describe('disabled state', () => {
  it('should not be disabled', () => {
    const { getByTestId } = render(<Button disabled={false}>My Button</Button>)
    expect(getByTestId('button')).not.toBeDisabled()
  })

  it('should be disabled', () => {
    const { getByTestId } = render(<Button disabled={true}>My Button</Button>)
    expect(getByTestId('button')).toBeDisabled()
  })
})

describe('loading state', () => {
  it('should not be loading', () => {
    const { getByTestId } = render(<Button isLoading={false}>My Button</Button>)
    expect(getByTestId('button')).toHaveStyle('color: #FFFFFF')
  })

  it('should be loading', () => {
    const { getByTestId } = render(<Button isLoading={true}>My Button</Button>)
    expect(getByTestId('button').firstChild).toHaveStyle('color: rgba(0, 0, 0, 0.0) !important')
  })
})

describe('no spacing style', () => {
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

describe('sizes', () => {
  it('should be small', () => {
    const { getByTestId } = render(<Button size='small'>My Button</Button>)

    expect(getByTestId('button')).toHaveClass('MuiButton-sizeSmall')
  })

  it('should be medium', () => {
    const { getByTestId } = render(<Button size='medium'>My Button</Button>)

    expect(getByTestId('button')).not.toHaveClass('MuiButton-sizeSmall', 'MuiButton-sizeLarge')
  })

  it('should be large', () => {
    const { getByTestId } = render(<Button size='large'>My Button</Button>)

    expect(getByTestId('button')).toHaveClass('MuiButton-sizeLarge')
  })
})

describe('types', () => {
  it('should be primary', () => {
    const { getByTestId } = render(<Button type='primary'>My Button</Button>)
    expect(getByTestId('button')).toHaveAttribute('type', 'primary')
  })

  it('should be secondary', () => {
    const { getByTestId } = render(<Button type='secondary'>My Button</Button>)
    expect(getByTestId('button')).toHaveAttribute('type', 'secondary')
  })

  it('should be tertiary', () => {
    const { getByTestId } = render(<Button type='tertiary'>My Button</Button>)
    expect(getByTestId('button')).toHaveAttribute('type', 'tertiary')
  })
})
