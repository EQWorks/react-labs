import React from "react";
import { Card } from "@material-ui/core";
// import { palette, typography } from "./theme";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { fade } from "@material-ui/core/styles/colorManipulator";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  style1: {
    width: "100%",
    backgroundImage: '#fff',
    border: `1px solid ${theme.palette.grey[400]}`,
    boxShadow: theme.shadows[1],
    borderRadius: '10px',
    "&:hover": {
      transition: "all .3s",
      border: `1px solid ${theme.palette.grey[500]}`,
      boxShadow: theme.shadows[2],
    },
    "&.selected": {
      transition: "all .3s",
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: theme.shadows[3],
      "&:hover": {
        transition: "all .3s",
        border: `1px solid ${theme.palette.primary[800]}`,
        boxShadow: theme.shadows[4],
      },
    },
  },
  style2: {
    width: "100%",
    backgroundImage: `linear-gradient(#fff, ${theme.palette.grey[100]})`,
    border: `1px solid ${theme.palette.grey[400]}`,
    boxShadow: theme.shadows[1],
    borderRadius: '10px',
    "&:hover": {
      transition: "all .3s",
      border: `1px solid ${theme.palette.grey[500]}`,
      boxShadow: theme.shadows[2],
    },
    "&.selected": {
      transition: "all .3s",
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: theme.shadows[3],
      "&:hover": {
        transition: "all .3s",
        border: `1px solid ${theme.palette.primary[800]}`,
        boxShadow: theme.shadows[4],
      },
    },
  },
  style3: {
    width: "100%",
    backgroundImage: (props) =>
      `linear-gradient(${fade(theme.palette.grey[600], 0)}, #000), url(${props.image})`,
    backgroundPosition: "center center",
    backgroundSize: "100% auto",
    transition: "background-size 0.6s ease-out",
    color: "white",
    boxShadow: theme.shadows[1],
    borderRadius: '10px',
    "&:hover": {
      transition: "all .6s",
      boxShadow: theme.shadows[3],
      backgroundSize: "105% auto",
    },
  }
}))

// const useStyles = makeStyles((t) => {
//   const theme = {
//     ...t,
//     typography: {
//       ...t.typography,
//       ...typography,
//     },
//     palette: {
//       ...t.palette,
//       ...palette,
//     },
//   };

//   return {
//     style1: {
//       width: "100%",
//       backgroundImage: '#fff',
//       border: `1px solid ${theme.palette.grey[400]}`,
//       boxShadow: theme.palette.shadow[10],
//       borderRadius: '10px',
//       "&:hover": {
//         transition: "all .3s",
//         border: `1px solid ${theme.palette.grey[500]}`,
//         boxShadow: theme.palette.shadow[20],
//       },
//       "&.selected": {
//         transition: "all .3s",
//         border: `1px solid ${theme.palette.primary.main}`,
//         boxShadow: theme.palette.shadow[30],
//         "&:hover": {
//           transition: "all .3s",
//           border: `1px solid ${theme.palette.shade.primary[800]}`,
//           boxShadow: theme.palette.shadow[40],
//         },
//       },
//     },
//     style2: {
//       width: "100%",
//       backgroundImage: `linear-gradient(#fff, ${theme.palette.grey[100]})`,
//       border: `1px solid ${theme.palette.grey[400]}`,
//       boxShadow: theme.palette.shadow[10],
//       borderRadius: '10px',
//       "&:hover": {
//         transition: "all .3s",
//         border: `1px solid ${theme.palette.grey[500]}`,
//         boxShadow: theme.palette.shadow[20],
//       },
//       "&.selected": {
//         transition: "all .3s",
//         border: `1px solid ${theme.palette.primary.main}`,
//         boxShadow: theme.palette.shadow[30],
//         "&:hover": {
//           transition: "all .3s",
//           border: `1px solid ${theme.palette.shade.primary[800]}`,
//           boxShadow: theme.palette.shadow[40],
//         },
//       },
//     },
//     style3: {
//       width: "100%",
//       backgroundImage: (props) =>
//         `linear-gradient(${fade(theme.palette.grey[600], 0)}, #000), url(${props.image})`,
//       backgroundPosition: "center center",
//       backgroundSize: "100% auto",
//       transition: "background-size 0.6s ease-out",
//       color: "white",
//       boxShadow: theme.palette.shadow[10],
//       borderRadius: '10px',
//       "&:hover": {
//         transition: "all .6s",
//         boxShadow: theme.palette.shadow[30],
//         backgroundSize: "105% auto",
//       },
//     },
//   };
// });

const StyledCardContainer = ({ pattern, onClick, selected, children }) => {
  const whichStyle = "style" + pattern.style;
  const classes = useStyles(pattern);
  return (
    <Card
      className={clsx(classes[whichStyle], {selected})}
      elevation={0}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};

StyledCardContainer.propTypes = {
  onClick: PropTypes.func,
  pattern: PropTypes.object,
  children: PropTypes.node,
  checked: PropTypes.bool,
  selected: PropTypes.bool,
};

StyledCardContainer.defaultProps = {
  onClick: null,
  pattern: {
    style: 1,
    backgroundImage: "none",
  },
  children: {},
  checked: false,
  selected: false,
};

export default StyledCardContainer;
