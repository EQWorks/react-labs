import React from "react";
import PropTypes from "prop-types";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import customTheme from "../../../src/theme/index";
import DefaultFilter from "../filters/default-filter";
import Download from "./download";
import Toggle from "./toggle";

const useStyles = makeStyles(() => {
  const theme = customTheme;
  return {
    grow: {
      flexGrow: 1,
    },
    title: {
      marginRight: theme.spacing(2),
    },
  };
});

const TableToolbar = ({
  // Search
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  // Toggle
  toggleHideColumn,
  allColumns, // + Download
  // Download
  downloadable,
  data,
  visibleColumns,
  rows,
}) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={customTheme}>
      <Toolbar>
        {allColumns.some((c) => !c.disableGlobalFilter) && (
          <DefaultFilter
            preFilteredRows={preGlobalFilteredRows}
            setFilter={setGlobalFilter}
            globalFilter={globalFilter}
          />
        )}
        <div className={classes.grow} />
        {allColumns.some((c) => !c.noToggle) && (
          <Toggle allColumns={allColumns} toggleHideColumn={toggleHideColumn} />
        )}
        {downloadable && (
          <Download
            data={data}
            allColumns={allColumns}
            visibleColumns={visibleColumns}
            rows={rows}
          />
        )}
      </Toolbar>
    </ThemeProvider>
  );
};

TableToolbar.propTypes = {
  preGlobalFilteredRows: PropTypes.array.isRequired,
  globalFilter: PropTypes.string.isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
  ...Download.propTypes,
  ...Toggle.propTypes,
};

export default TableToolbar;
