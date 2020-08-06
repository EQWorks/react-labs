import React from "react";
import PropTypes from "prop-types";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ButtonBase from "@material-ui/core/ButtonBase";
import ImportExportIcon from "@material-ui/icons/ImportExport";

import customTheme from "../../src/theme/index";

const useStyles = makeStyles(() => {
  return {
    root: {
      paddingLeft: "2px",
      paddingRight: "2px",
    },
  };
});

const TableSortLabel = ({ isSorted, isSortedDesc }) => {
  const classes = useStyles();

  const renderIcon = () => {
    if (!isSorted) {
      return (
        <ThemeProvider theme={customTheme}>
          <ImportExportIcon color="disabled" />
        </ThemeProvider>
      );
    }
    return isSortedDesc ? (
      <ThemeProvider theme={customTheme}>
        <ArrowDownwardIcon fontSize="small" color="primary" />
      </ThemeProvider>
    ) : (
      <ThemeProvider theme={customTheme}>
        <ArrowUpwardIcon fontSize="small" color="primary" />
      </ThemeProvider>
    );
  };
  return (
    <ThemeProvider theme={customTheme}>
      <ButtonBase disableRipple className={classes.root}>
        {renderIcon()}
      </ButtonBase>
    </ThemeProvider>
  );
};

TableSortLabel.propTypes = {
  isSorted: PropTypes.bool,
  isSortedDesc: PropTypes.bool,
};
TableSortLabel.defaultProps = {
  isSorted: false,
  isSortedDesc: false,
};

export default TableSortLabel;
