import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  container: {
    "& .MuiPaper-root": {
      margin: "0 20px 20px 0",
    },
  },
});

const ContentWrapper = (storyFn) => {
  const classes = useStyles();
  return <div className={classes.container}>{storyFn()}</div>;
};

const cardTypes = ["primary", "secondary", "success"];

export default {
  title: "CardTest",
  component: Card,
  decorators: [ContentWrapper],
};

export const Default = () => {
  return (
    <>
      {cardTypes.map((type, index) => (
        <Card className={type} key={index}>
          <CardContent>
            <Typography>{type.toUpperCase()}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
