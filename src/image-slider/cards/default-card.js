import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import StyledCardContainer from "../../styled-card-container";
import PropTypes from 'prop-types';


const DefaultCard = ({ content }) => {
  const theme = useTheme();
  return (
    <StyledCardContainer>
      <CardContent style={{padding: theme.spacing(4)}}>
        <Typography variant="h4" gutterBottom>{content}</Typography>
        <Typography variant="body1">This is a default card</Typography>
      </CardContent>
    </StyledCardContainer>
  );
};

DefaultCard.propTypes = {
  content: PropTypes.number,
}

DefaultCard.defaultProps = {
  content: 0,
}

export default DefaultCard;
