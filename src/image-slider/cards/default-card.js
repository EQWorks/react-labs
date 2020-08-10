import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import { CardContent, Typography } from '@material-ui/core'

import StyledCardContainer from '../../styled-card-container'

const DefaultCard = ({ content }) => {
  const theme = useTheme()
  return (
    <StyledCardContainer>
      <CardContent style={{ padding: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          {content}
        </Typography>
        <Typography variant="body1">This is a default card</Typography>
      </CardContent>
    </StyledCardContainer>
  )
}

DefaultCard.propTypes = {
  content: PropTypes.number
}

DefaultCard.defaultProps = {
  content: 0
}

export default DefaultCard
