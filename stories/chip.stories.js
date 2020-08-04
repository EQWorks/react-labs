import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => {
  return {
    test: {
      color: theme.palette.primary.main,
    },
  };
});

export default {
  component: Chip,
  title: "Chip",
};

export const Default = () => {
  const classes = useStyles();

  return <Chip className={classes.test} label="Basic" />;
};

// https://material-ui.com/styles/basics/#adapting-based-on-props
// const useStyles = makeStyles({
//   container: {
//     '& button': {
//       display: 'block',
//       margin: '0 0 20px 0'
//     }
//   },
//   test: props => ({
//     color: props.color,
//     backgroundColor: props.backgroundColor
//   })
// })

// const ButtonComponent = ({ backgroundColor, color, variant }) => {
//   const props = {
//     backgroundColor: backgroundColor,
//     color: color
//   }
//   const classes = useStyles(props)

//   return <Button className={classes.test} disableRipple={true} variant={variant}>Button</Button>
// }
