import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Typography } from "@material-ui/core";
import StyledCardContainer from "../../styled-card-container";

const useStyles = makeStyles((theme) => {
  return {
    header: {
      display: "flex",
      justifyContent: "flex-end",
      margin: theme.spacing(1),
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      //height: '200px',
    },
    avatar: {
      width: "96px",
      height: "96px",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    category: {
      marginBottom: theme.spacing(3),
    },
  };
});

const CategoryCard = ({prop}) => {
  const classes = useStyles();
  const {image, avatar, category} = prop;
  return (
    <StyledCardContainer
      pattern={{
        style: 2,
      }}
    >
      <Grid item className={classes.content}>
        <Avatar
          alt="item"
          src={image}
          className={classes.avatar}
        ></Avatar>
        <Typography variant="body1" className={classes.category}>
          {category}
        </Typography>
      </Grid>
    </StyledCardContainer>
  );
};

export default CategoryCard;
