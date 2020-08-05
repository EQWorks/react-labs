import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardComponent = ({ type }) => {
  return (
    <Card className={type}>
      <CardContent>
        <Typography>Hello</Typography>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "success"]),
};

CardComponent.defaultProps = {
  type: "primary",
};

export default CardComponent;
