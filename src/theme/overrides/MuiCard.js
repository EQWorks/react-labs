import palette from "../palette";

const MuiCard = {
  root: {
    "&.primary": {
      backgroundColor: palette.primary.main,
      color: palette.common.white,
    },
    "&.secondary": {
      backgroundColor: palette.secondary.main,
      color: palette.common.white,
    },
    "&.success": {
      backgroundColor: palette.success.main,
      color: palette.common.black,
    },
  },
};

export default MuiCard;
