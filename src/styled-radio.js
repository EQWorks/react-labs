import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    border: "1px solid",
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    "input:hover ~ &": {
      transition: "all .3s",
      backgroundColor: theme.palette.action.hover,
      borderColor: theme.palette.primary[100],
    },
    "input:disabled ~ &": {
      opacity: 0.5,
    },
  },
  checkedIcon: {
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `linear-gradient(0deg, ${theme.palette.action.active}, ${theme.palette.action.active})`,
      borderColor: theme.palette.action.active,
    },
    "input:disabled ~ &": {
      opacity: 0.5,
    },
  },
}));

const StyledRadio = (props) => {
  const classes = useStyles();
  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

export default StyledRadio;
