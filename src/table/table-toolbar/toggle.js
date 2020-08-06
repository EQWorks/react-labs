import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import Switch from "@material-ui/core/Switch";

import customTheme from "../../../src/theme/index";
import Button from "../../dynamic-button";

const useStyles = makeStyles(() => {
  return {
    list: {
      overflow: "auto",
      maxHeight: "60vh",
    },
  };
});

const Toggle = ({ allColumns, toggleHideColumn }) => {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  if (!(allColumns || []).length) {
    return null;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div aria-label="Edit button" ref={anchorRef}>
        <Button
          type="tertiary"
          endIcon={
            <Badge
              color="secondary"
              variant="dot"
              invisible={allColumns.every((c) => c.isVisible || c.noToggle)}
            >
              <SettingsIcon fontSize="small" />
            </Badge>
          }
          onClick={handleToggle}
          aria-haspopup="menu"
        >
          Edit table
        </Button>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <List className={classes.list}>
                  {allColumns.map((c) => {
                    const labelID = `toggle-label-${c.id}`;
                    return (
                      <ListItem
                        key={c.id}
                        role={undefined}
                        dense
                        button
                        disabled={c.noToggle}
                        onClick={() => {
                          toggleHideColumn(c.id);
                        }}
                      >
                        <ListItemIcon>
                          <Switch
                            color="primary"
                            edge="start"
                            checked={c.isVisible}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelID }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelID}
                          primary={c.render("Header")}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ThemeProvider>
  );
};

Toggle.propTypes = {
  allColumns: PropTypes.array,
  toggleHideColumn: PropTypes.func,
};
Toggle.defaultProps = {
  allColumns: [],
  toggleHideColumn: () => {},
};

export default Toggle;
