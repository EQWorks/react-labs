import React from "react";
import { Card, CardContent, CardActions } from "@material-ui/core";
import { palette, typography } from "./themes";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { fade } from "@material-ui/core/styles/colorManipulator";
import StyledCardContainer from "./styled-card-container";
import image from "./assets/footwear.jpeg";

const StyledCard = ({ pattern, content, actions }) => {
  return (
    <StyledCardContainer
      pattern={{
        style: 3,
        backgroundImage: image,
      }}
      clickable
    >
      <CardContent>{content}</CardContent>
      <CardActions>{actions}</CardActions>
    </StyledCardContainer>
  );
};

StyledCard.propTypes = {};

StyledCard.defaultProps = {};

export default StyledCard;
