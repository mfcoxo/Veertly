import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./Button.styles";

const ButtonComponent = ({ label, func }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={func}>
      </Button>
    </div>
  );
};

export default ButtonComponent;
