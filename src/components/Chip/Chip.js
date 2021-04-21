import React from "react";
import Chip from "@material-ui/core/Chip";
import useStyles from "./Chip.styles";

const SmallChips = ({ label, className }) => {
  const classes = useStyles();

  return (
    <div className={`${className || ""} ${classes.root}`}>
      <Chip size="small" label={label} color="primary" />
    </div>
  );
};
export default SmallChips;
