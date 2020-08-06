import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MUIList from "@material-ui/core/List";

import customTheme from "../../src/theme/index";
import ListItem from "./list-item";

const useStyles = makeStyles(() => {
  const theme = customTheme;
  return {
    root: {
      borderRadius: "4px",
    },
    border: {
      border: `1px solid ${theme.palette.secondary[300]}`,
    },
  };
});

const List = ({
  divider,
  border,
  spacing,
  width,
  onItemClick,
  focusOnSelected,
  button,
  data,
}) => {
  const classes = useStyles();
  const dimensions = { width };
  const [selected, setSelected] = useState(
    button && focusOnSelected ? 0 : false
  );

  return (
    <ThemeProvider theme={customTheme}>
      <MUIList
        className={clsx({ [classes.root]: true, [classes.border]: border })}
        style={dimensions}
        disablePadding
      >
        {data.map((datum, i) => (
          <div key={i}>
            <ListItem
              itemSecondaryAction={data.secondaryAction}
              onClick={() => {
                if (button) {
                  setSelected(i);
                }
                return onItemClick(datum, i);
              }}
              button={button}
              selected={selected === i}
              focusOnSelected={focusOnSelected}
              spacing={spacing}
              {...datum}
            />
            {divider && !spacing && i !== data.length - 1 && <Divider />}
          </div>
        ))}
      </MUIList>
    </ThemeProvider>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  divider: PropTypes.bool,
  border: PropTypes.bool,
  spacing: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  focusOnSelected: PropTypes.bool,
  onItemClick: PropTypes.func,
  button: PropTypes.bool,
};

List.defaultProps = {
  onItemClick: () => null,
  divider: false,
  border: false,
  spacing: 0,
  width: 600,
  focusOnSelected: false,
  button: false,
};

export default List;
