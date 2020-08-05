import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./palette";
import props from "./props";
import shadows from "./shadows";
import typography from "./typography";
import overrides from "./overrides/index";

const theme = createMuiTheme({
  palette,
  props,
  shadows,
  typography,
  overrides,
});

export default theme;
