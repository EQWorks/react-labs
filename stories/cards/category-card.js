import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card, Grid, Typography } from "@material-ui/core";


/* eslint react/prop-types: 0 */
const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.grey[50],
      width: "100%",
      borderRadius: '10px',
      "&:hover": {
        transition: "all .3s",
        backgroundColor: theme.palette.grey[100],
      },
    },
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
      padding: theme.spacing(2),
    },
    avatar: {
      width: "96px",
      height: "96px",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    category: {
      marginBottom: theme.spacing(0),
    },
    inventory: {
      color: theme.palette.grey[400],
    },
  };
});

const CategoryCard = ({ prop }) => {
  const classes = useStyles();
  const { image, category, inventory } = prop;
  return (
    <Card className={classes.container} elevation={0}>
      <Grid item className={classes.content}>
        <Avatar alt="item" src={image} className={classes.avatar}></Avatar>
        <Typography variant="body1" className={classes.category}>
          {category}
        </Typography>
        <Typography varitant="body1" className={classes.inventory}>
          {`${inventory} products`}
        </Typography>
      </Grid>
    </Card>
  );
};

export default CategoryCard;
