import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'

import { Card, DefaultTheme } from '../../src/index'

const wrapTheme = (WrappedComponent) => {
  class Wrapper extends React.PureComponent {
    render() {
      return (
        <ThemeProvider theme={DefaultTheme}>
          <WrappedComponent {...this.props} />
        </ThemeProvider>
      )
    }
  }
  return Wrapper
}

const WrappedCard = wrapTheme(Card)

describe('render', () => {
  it('should render ok with least props passed', () => {
    const { getByTestId } = render(<Card cardContent='My Card Content' />)
    const card = getByTestId('card')
    // snapshot
    expect(card).toMatchSnapshot()
    // card content matches
    expect(card.getElementsByClassName('MuiTypography-body2')[0].textContent).toBe('My Card Content')
    // card content aligns left
    expect(card.getElementsByClassName('MuiTypography-alignLeft')[0]).toBeTruthy()
    // no title
    expect(card.getElementsByClassName('MuiTypography-h5')[0].textContent).toBeFalsy()
    // medium size
    expect(card).toHaveStyle('max-width: 500px')
  })
})

describe('action side', () => {
  it('should be start (left)', () => {
    const { getByTestId } = render(
      <Card
        actionSide='start'
        cardAction={<p>My Card Action</p>}
        cardContent='My Card Content'
      />)
    const card = getByTestId('card')
    expect(card.getElementsByClassName('MuiGrid-root')[0]).not.toHaveStyle('justify-content: center')
    expect(card.getElementsByClassName('MuiGrid-root')[0]).not.toHaveStyle('justify-content: flex-end')
  })

  it('should be center', () => {
    const { getByTestId } = render(
      <WrappedCard
        actionSide='center'
        cardAction={<p>My Card Action</p>}
        cardContent='My Card Content'
      />)
    const card = getByTestId('card')
    console.log(card.getElementsByClassName('MuiGrid-root')[0].className)
    // expect(card.getElementsByClassName('MuiGrid-root')[0]).toHaveClass('MuiGrid-justify-xs-center')
  })
})


