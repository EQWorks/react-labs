/* eslint react/prop-types: 0 */
import React from "react";
import StyledCardContainer from "../src/styled-card-container";
import {
  Avatar,
  Chip,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import { data, data2, data3 } from "./data/cardInfo";

export default {
  component: StyledCardContainer,
  title: "StyledCardContainer",
};

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "150px",
  },
  sub: {
    color: theme.palette.grey[600],
  },
}));

export const Default = () => {
  const classes = useStyles();

  const contents = ({ title, main, sub }) => {
    return (
      <React.Fragment>
        <Grid item className={classes.header}>
          <Typography variant="subtitle1">{title}</Typography>
        </Grid>
        <Typography variant="h3">{main}</Typography>
        <Typography variant="body1" className={classes.sub}>
          {sub}
        </Typography>
      </React.Fragment>
    );
  };

  return (
    <Grid container spacing={2}>
      {data.map((cardInfo, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <StyledCardContainer>
            <CardContent className={classes.content}>
              {contents(cardInfo)}
            </CardContent>
          </StyledCardContainer>
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles2 = makeStyles((theme) => {
  console.log(theme);
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
    icon: {
      color: "#0075FF",
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

export const StyleSelection = () => {
  const classes = useStyles2();
  return (
    <Grid container spacing={2}>
      {data2.map((cardInfo, i) => (
        <Grid key={i} item xs={12} sm={4} md={2}>
          <StyledCardContainer
            pattern={{
              style: 2,
            }}
          >
            <Grid item className={classes.header}>
              <CheckCircleOutlineRoundedIcon className={classes.icon} />
            </Grid>
            <Grid item className={classes.content}>
              <Avatar
                alt="item"
                src={cardInfo.image}
                className={classes.avatar}
              ></Avatar>
              <Typography variant="body1" className={classes.category}>
                {cardInfo.category}
              </Typography>
            </Grid>
          </StyledCardContainer>
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles3 = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "240px",
  },
  tag: {
    display: "flex",
    justifyContent: "flex-end",
  },
  chip: {
    borderRadius: "4px",
    margin: theme.spacing(0.5),
  },
}));

export const WithImage = () => {
  const classes = useStyles3();

  const contents = ({ name, description, type, price, category }) => {
    return (
      <React.Fragment>
        <Grid item>
          <Grid item className={classes.tag}>
            <Chip className={classes.chip} size="small" label={type} />
            <Chip className={classes.chip} size="small" label={category} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid item className={classes.header}>
            <Typography variant="subtitle1">{name}</Typography>
          </Grid>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
          <Typography variant="h6">{price}/mo</Typography>
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <Grid container spacing={2}>
      {data3.map((cardInfo, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <StyledCardContainer
            pattern={{
              style: 3,
              image: cardInfo.image,
            }}
          >
            <CardContent className={classes.content}>
              {contents(cardInfo)}
            </CardContent>
          </StyledCardContainer>
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles4 = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '150px',
    padding: theme.spacing(2),
  },
}));

export const Clickable = () => {
  const classes = useStyles4();

  const content = (
    <React.Fragment>
      <Grid item className={classes.header}>
        <Typography variant="subtitle1">American Motors</Typography>
        <Chip size="small" label="Layer" />
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Propensity of American Motors vehicle brand in the FSA
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">$500/mo</Typography>
      </Grid>
    </React.Fragment>
  );
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <StyledCardContainer clickable>
          <CardContent className={classes.content}>{content}</CardContent>
        </StyledCardContainer>
      </Grid>
    </Grid>
  );
};
