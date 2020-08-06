import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

import customTheme from "../../../src/theme/index";

// based on https://stackoverflow.com/a/10601315/158111
function abbreviateNumber(value) {
  const suffixes = ["", "k", "m", "b", "t"];
  let newValue = value;
  if (value >= 1000) {
    const suffixNum = Math.floor(String(Math.floor(value)).length / 3);
    let shortValue = "";
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value;
      shortValue = parseFloat(shortValue.toPrecision(precision));
      const dotLessShortValue = String(shortValue).replace(
        /[^a-zA-Z 0-9]+/g,
        ""
      );
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(1);
    }
    newValue = `${shortValue}${suffixes[suffixNum]}`;
  } else if (value % 1 != 0 && value > 1) {
    //to account for float numbers
    newValue = Math.floor(value).toString();
  }
  return newValue;
}

const useStyles = makeStyles(() => {
  const theme = customTheme;
  return {
    root: {
      width: "40ch",
      padding: theme.spacing(4, 2, 0, 2),
      textAlign: "center",
    },
  };
});

const RangeFilter = ({
  column: { filterValue, preFilteredRows, setFilter, id, percentage },
}) => {
  const classes = useStyles();
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <ThemeProvider theme={customTheme}>
      <div
        className={classes.root}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Slider
          value={filterValue || [Math.ceil(max), Math.floor(min)]}
          onChange={(_, newValue) => {
            const [_min, _max] = newValue;
            if (_min === min && _max === max) {
              setFilter(undefined);
            } else {
              setFilter(newValue);
            }
          }}
          max={Math.ceil(max)}
          min={Math.floor(min)}
          valueLabelDisplay="on"
          aria-labelledby={`${id}-range-label`}
          getAriaValueText={
            percentage ? (value) => value * 100 : abbreviateNumber
          }
          valueLabelFormat={
            percentage ? (value) => value * 100 : abbreviateNumber
          }
          step={max - min <= 1 ? 0.1 : 1}
        />
      </div>
    </ThemeProvider>
  );
};

RangeFilter.propTypes = {
  column: PropTypes.object.isRequired,
};
RangeFilter.filterFn = "between";

export default RangeFilter;
