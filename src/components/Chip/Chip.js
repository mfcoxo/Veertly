import React from "react";
import Chip from "@material-ui/core/Chip";
import useStyles from "./Chip.styles";

const SmallChips = ({ props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip size="small" label={props} clickable color="primary" />
    </div>
  );
};
export default SmallChips;

